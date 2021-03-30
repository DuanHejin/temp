// 节流函数

let isOver = false;
function throttle(fn, time = 200) {
  if (isOver) {
    fn();
    isOver = false;
    setTimeout(() => {
      isOver = true;
    }, time);
  }
}

let isClicked = false;
function throttle2(fn, time = 200) {
  if (!isClicked) {
    fn();
    isClicked = true;
    setTimeout(() => {
      isClicked = false;
    }, time);
  }


}

// (function () {
let canNext = true;
function throttle3(fn, time = 200) {
  return function () {
    if (canNext) {
      fn();
      canNext = false;
      setTimeout(() => {
        canNext = true;
      }, time)
    }
  }
}

function log() {
  console.log('timestamp', Date.now());
}

const handleThrottle = throttle3(log, 1000);

// })()


function wrapDebounce(fn, time = 200) {
  let timer = 0;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
    timer = setTimeout(() => {
      fn();
    }, time);
  }
}

const handleDebounce = wrapDebounce(log, 1000);

const reqMap = new Map;

function getServerData() {
  const val = document.getElementById('searchTerm').value;
  const uniqueKey = val + '_' + Date.now();
  reqMap.set(uniqueKey, false);

  $.get(`http://127.0.0.1:3001/get/user/info?searchTerm=${val}`, (res) => {
    reqMap.set(uniqueKey, true);

    // 如果不是最后一个req，则废弃
    if ([...reqMap.keys()].indexOf(uniqueKey) !== (reqMap.size - 1)) {
      console.log('abort ---- ');
    } else {
      console.log('res :>> ', res);
    }

    const isAllSucc = [...reqMap.values()].every(status => status);
    if (isAllSucc) {
      reqMap.clear();
    }
  });

}

const handleChange = wrapDebounce(getServerData, 1);
