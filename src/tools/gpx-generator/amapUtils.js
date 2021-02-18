var map = new AMap.Map('container', {
  resizeEnable: true,
  center: [120.730893, 31.251654],
  zoom: 13,
  expandZoomRange: true,
  zooms: [3, 20],
});
AMap.plugin([
  'AMap.ToolBar',
  'AMap.Scale',
  'AMap.OverView',
  'AMap.Geolocation',
  'AMap.Driving',
  'AMap.DragRoute',
  'AMap.Autocomplete',
  'AMap.PlaceSearch',
], function () {
  // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
  map.addControl(new AMap.ToolBar());

  // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
  map.addControl(new AMap.Scale());

  // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
  map.addControl(new AMap.OverView({ isOpen: true }));

  // 左下角定位plugin
  // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
  // map.addControl(new AMap.Geolocation());

  // 实例化Autocomplete
  const searchAutoOptions = {
    // input 为绑定输入提示功能的input的DOM ID
    input: 'searchTerm',
    city: '苏州', // 优先在苏州市检索
  }
  const searchAutoComplete = new AMap.Autocomplete(searchAutoOptions);
  const placeSearch = new AMap.PlaceSearch({
    city: '苏州',
    map: map
  })
  AMap.event.addListener(searchAutoComplete, 'select', function (e) {
    placeSearch.search(e.poi.name)
  });


  // 实例化Autocomplete
  const startLocationAutoOptions = {
    // input 为绑定输入提示功能的input的DOM ID
    input: 'start_location',
    city: '苏州', // 优先在苏州市检索
  }
  const startLocationAutoComplete = new AMap.Autocomplete(startLocationAutoOptions);

  const endLocationAutoOptions = {
    // input 为绑定输入提示功能的input的DOM ID
    input: 'end_location',
    city: '苏州', // 优先在苏州市检索
  }
  const endLocationAutoComplete = new AMap.Autocomplete(endLocationAutoOptions);

});

// 驾车路线规划plugin
const driving = new AMap.Driving({
  // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
  policy: AMap.DrivingPolicy.LEAST_TIME,
  // map 指定将路线规划方案绘制到对应的AMap.Map对象上
  map: map,
  // panel 指定将结构化的路线详情数据显示的对应的DOM上，传入值需是DOM的ID
  panel: 'panel'
});

let drivingRouteResult = [];

function convertToRouteResult(drivingResult) {
  let result = [];
  if (drivingResult && Array.isArray(drivingResult.routes)) {
    const { steps } = drivingResult.routes[0];
    if (Array.isArray(steps)) {
      steps.forEach(({ path }) => {
        path.forEach(p => {
          const { lat, lng } = p;
          result.push(convertToWptFormat(lat, lng));
        });
      });
    }
  }
  return result;
}

/**
 * 下载规划线路gpx文件
 */
function downloadDrivingGpx() {
  const start_location = document.getElementById('start_location').value;
  const end_location = document.getElementById('end_location').value;
  const fileName = `${start_location} 到 ${end_location}`;
  const result = convertToRouteResult(drivingRouteResult);
  const text = convertToGpxFormat(result);
  download(`${fileName}.gpx`, text);
}

/**
 * 规划路线
 */
function setDrivingRoute() {
  driving.clear();
  const start_location = document.getElementById('start_location').value;
  const end_location = document.getElementById('end_location').value;
  if (!start_location || !end_location) {
    alert('请输入起点和终点');
    return;
  }
  var points = [
    { keyword: start_location, city: '' },
    { keyword: end_location, city: '' }
  ]

  // 搜索完成后，将自动绘制路线到地图上
  driving.search(points, (status, result) => {
    console.log('result :>> ', result);
    drivingRouteResult = result;
  })
}

let dragRoute;
/**
 * 规划拖拽路线
 */
function setDragRoute() {
  stopWatchClick();
  // var path = [];
  // path.push(new AMap.LngLat(116.303843, 39.983412));
  // // path.push(new AMap.LngLat(116.321354, 39.896436));
  // path.push(new AMap.LngLat(116.407012, 39.992093));
  // map.plugin("AMap.DragRoute", function () {
  //   const route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类，传入参数分别为：地图对象，初始路径，驾车策略
  //   route.search(); //查询导航路径并开启拖拽导航
  // });

  const path = selectedCoords.map(({ latitude, longitude }) => {
    return new AMap.LngLat(longitude, latitude);
  });
  dragRoute = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类，传入参数分别为：地图对象，初始路径，驾车策略
  dragRoute.search(); //查询导航路径并开启拖拽导航
}

/**
 * 清除拖拽路线
 * @param {*} params 
 */
function clearDragRoute(params) {
  dragRoute && dragRoute.destroy();
}


/**
 * 转换成wpt标签格式
 * @param {*} lat 
 * @param {*} log 
 */
function convertToWptFormat(lat, log) {
  return `<wpt lat="${lat}" lon="${log}"></wpt>`;
}

/**
 * 转换成gpx文件格式
 * @param {*} result 
 */
function convertToGpxFormat(result) {
  let text = '';
  if (Array.isArray(result)) {
    const content = result.join('\n  ');
    text = `
<?xml version="1.0" encoding="UTF-8"?>
<gpx>
  ${content}
</gpx>
`;
  }
  return text;
}

let result = [];
let selectedCoords = [];
var clickHandler = function (e) {
  const latitude = e.lnglat.getLat();
  const longitude = e.lnglat.getLng();
  selectedCoords.push({ latitude, longitude });
  result.push(convertToWptFormat(latitude, longitude));
};
// 开始选点
function watchClick(params) {
  result = [];
  selectedCoords = [];
  // 绑定事件
  map.on('click', clickHandler);
}

// 结束选点
function stopWatchClick(params) {
  // 解绑事件
  map.off('click', clickHandler);
  console.log('result :>> ', result);
  console.log('selectedCoords :>> ', selectedCoords);
}

/**
 * 下载gpx文件
 */
function downloadGpx() {
  const fileName = document.getElementById('routeName').value || 'xxx';
  const text = convertToGpxFormat(result);
  download(`${fileName}.gpx`, text);
}

/**
 * 【共通】下载文件
 * @param {*} filename 
 * @param {*} text 
 */
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function onclickMore() {
  const domMore = document.getElementById('more');
  const displayValue = domMore.style.display;
  if (displayValue === 'none' || !displayValue) {
    domMore.style.display = 'block';
  } else {
    domMore.style.display = 'none';
  }
}