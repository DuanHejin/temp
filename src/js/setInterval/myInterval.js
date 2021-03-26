function myInterval(fn, time) {
  const timer = {
    isDone: false,
  };

  const interval = () => {
    if (!timer.isDone) {
      fn();
      setTimeout(interval, time);
    }
  }

  setTimeout(interval, time);
  return timer;
}

const timer = myInterval(() => { console.log('test') }, 400);

setTimeout(() => {
  timer.isDone = true;
}, 2100)
