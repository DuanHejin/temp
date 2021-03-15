// 防抖函数

let timer;
function debounce(fn, time = 200) {
  if (timer) {
    clearTimeout(timer);
    timer = 0;
  }

  timer = setTimeout(() => {
    fn();
  }, time);
}