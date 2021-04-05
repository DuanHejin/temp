// 防抖
let timer = 0;
function debounce(fn, time = 200) {
  if (timer) {
    clearTimeout(timer);
    timer = 0;
  }

  timer = setTimeout(() => {
    fn();
  }, time);
}

// 节流
let canNext = true;
function throttle(fn, time = 200) {
  if (canNext) {
    fn();
    canNext = false;
    setTimeout(() => {
      canNext = true;
    }, time);
  }
}