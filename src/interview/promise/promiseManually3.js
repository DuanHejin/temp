var PENDING = 'pending';
var RESOLVED = 'resolved';
var REJECTED = 'rejected';

function MyPromise(executor) {
  if (typeof executor !== 'function') {
    throw new Error(executor + ' is not a function');
  }

  var self = this;
  self.state = PENDING;
  self.value = null;
  self.resolvedCallbacks = [];
  self.rejectedCallbacks = [];


  function resolve(result) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = RESOLVED;
        self.value = result;

        self.resolvedCallbacks.forEach(cb => cb(result));
      }
    }, 0);
  }

  function reject(error) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED;
        self.value = error;

        self.rejectedCallbacks.forEach(cb => cb(error));
      }
    }, 0);
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }

}

MyPromise.prototype.then = function (onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : function (result) {
    return result;
  };
  onRejected = typeof onRejected === 'function' ? onRejected : function (error) {
    return error;
  }

  var self = this;

  if (self.state === RESOLVED) {
    onResolved(self.value);
  }

  if (self.state === REJECTED) {
    onRejected(self.value);
  }

  if (self.state === PENDING) {
    self.resolvedCallbacks.push(onResolved);
    self.rejectedCallbacks.push(onRejected);
  }
}


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('111');
  }, 1000);
});
console.log('p1 :>> ', p1);
p1.then((result) => {
  console.log('p1 :>> ', p1);
  console.log('result :>> ', result);
}, (err) => {
  console.log('p1 :>> ', p1);
  console.log('err :>> ', err);
});