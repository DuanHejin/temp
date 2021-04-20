const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {

  const self = this;
  // 初始状态
  this.state = PENDING;

  // 用于保存resolve或者reject传入的值
  this.value = null;

  // 用于保存resolve的回调函数
  this.resolvedCallbacks = [];

  // 用于保存rejected的回调函数
  this.rejectedCallbacks = [];

  // 状态变为resolved的方法
  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }

    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = RESOLVED;
        self.value = value;

        self.resolvedCallbacks.forEach((cb) => {
          cb(value);
        });
      }
    }, 0)
  }

  function reject(value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED;
        self.value = value;

        self.rejectedCallbacks.forEach((cb) => {
          cb(value);
        });
      }
    }, 0);
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : function (value) {
    return value;
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function (value) {
    return value;
  }
  if (this.state === PENDING) {
    this.resolvedCallbacks.push(onResolved);
    this.rejectedCallbacks.push(onRejected);
  }

  if (this.state === RESOLVED) {
    onResolved(this.value);
  }

  if (this.state === REJECTED) {
    onRejected(this.value);
  }
}

const p1 = new MyPromise((resolve, reject) => {
  console.log('init MyPromise');
  setTimeout(() => {
    resolve('test');
  }, 0)
});

p1.then((res) => {
  console.log('res :>> ', res);
}, (error) => {
  console.log('error :>> ', error);
})