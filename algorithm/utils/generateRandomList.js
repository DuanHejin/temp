(function(scope) {
  Function.prototype.logTimeStart = function(key) {
    console.time(key);
  }
  Function.prototype.logTimeEnd = function(key) {
    console.timeEnd(key);
  }

  function generateRandomValue(max) {
    return Math.floor(Math.random() * max + 1);
  }
  
  function generateRandomList(length) {
    const arr = [];
    if (!length) return arr;
    let times = 0;
    generateRandomList.logTimeStart("generateRandomList");
    do {
      times++;
      const val = generateRandomValue(length);
      if (arr.indexOf(val) === -1) {
        arr.push(val);
      }
    } while(arr.length !== length)
    console.log('Random times :', times);
    generateRandomList.logTimeEnd("generateRandomList")
    return arr;
  }

  const DHJ = {
    generateRandomValue,
    generateRandomList
  }
  scope.DHJ = DHJ;
})(window);