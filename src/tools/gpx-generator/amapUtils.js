var map = new AMap.Map('container', {
  resizeEnable: true,
  center: [120.730893, 31.251654],
  zoom: 13
});
AMap.plugin([
  'AMap.ToolBar',
  'AMap.Geolocation',
  'AMap.Driving',
  'AMap.Autocomplete',
  'AMap.PlaceSearch',
], function () {
  var toolbar = new AMap.ToolBar();
  map.addControl(toolbar)

  // 左下角定位plugin
  const geolocaion = new AMap.Geolocation();
  map.addControl(geolocaion);

  // 实例化Autocomplete
  const searchAutoOptions = {
    // input 为绑定输入提示功能的input的DOM ID
    input: 'searchTerm',
    city: '苏州', // 优先在苏州市检索
  }
  const searchAutoComplete = new AMap.Autocomplete(searchAutoOptions);
  const placeSearch = new AMap.PlaceSearch({
    city:'苏州',
    map: map
  })
  AMap.event.addListener(searchAutoComplete, 'select', function(e){
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
var clickHandler = function (e) {
  const latitude = e.lnglat.getLat();
  const longitude = e.lnglat.getLng();
  result.push(convertToWptFormat(latitude, longitude));
};
// 开始选点
function watchClick(params) {
  result = [];
  // 绑定事件
  map.on('click', clickHandler);
}

// 结束选点
function stopWatchClick(params) {
  // 解绑事件
  map.off('click', clickHandler);
  console.log('result :>> ', result);
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