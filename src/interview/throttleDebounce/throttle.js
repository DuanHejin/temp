// 节流函数

let isOver = false;
function throttle(fn, time = 200) {
  if (isOver) {
    fn();
    isOver = false;
  }
  setTimeout(() => {
    isOver = true;
  }, time);
}

let isClicked = false;
function throttle2(fn, time = 200) {
  if (!isClicked) {
    fn();
    isClicked = true;
  } else {
    return;
  }

  setTimeout(() => {
    isClicked = true;
  }, time);

}

