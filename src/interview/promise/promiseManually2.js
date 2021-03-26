const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {

  const self = this;

  this.state = PENDING;
  this.value = null;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];

  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = RESOLVED;
        self.value = value;

        self.resolvedCallbacks.forEach(cb => cb(value));
      }
    }, 0)
  }

  function reject(value) {
    setTimeout(() => {
      if (self.state === PENDING) {
        self.state = REJECTED;
        self.value = value;

        self.rejectedCallbacks.forEach(cb => cb(value));
      }
    }, 0)
  }
  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error)
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

new MyPromise((resolve, reject) => {
  console.log('init MyPromise');
  setTimeout(() => {
    resolve('return after 100ms');
  }, 100)
}).then((res) => {
  console.log('res :>> ', res);
}, (error) => {
  console.log('error :>> ', error);
});