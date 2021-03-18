/**
 * 实现EventEmmiter
 * @example
 * const ee = new EventEmitter();
 * ee.on('update', console.log)
 * ee.once('update', console.log)
 * ee.emit('update', 'xxx')
 * ee.off('update', console.log)
 * 
 */
class EventEmitter {

  constructor() {
    this._events = {};
  }

  /**
   * 监听
   * @param {*} name 
   * @param {*} callback 
   */
  on(name, callback) {
    // // 没有注册过的场合
    // if (!this._events[name]) {
    //   this._events[name] = [];
    //   this._events[name].push(callback);
    //   return;
    // }
    // // 注册过的场合
    // this._events[name].push(callback);

    // 另一种写法
    (this._events[name] || (this._events[name] = [])).push(callback);
    return this;
  }

  /**
   * 监听一次
   * @param {*} name 
   * @param {*} callback 
   */
  once(name, callback) {
    const wrapFn = (...args) => {
      callback(...args);
      this.off(name, wrapFn);
    }
    // 在原来的cb上包一层函数wrapFn，当event触发的时候，执行的是wrapFn
    // wrapFn内容是执行原来的cb，然后调用off方法，解除event
    // 注意点，因为需要在闭包内访问this，所以需要用箭头表达式传递this
    this.on(name, wrapFn);
    return this;
  }

  /**
   * 触发
   * @param {*} name 
   * @param {*} params 
   */
  emit(name, params) {
    // // 没有注册过的场合
    // if (!this._events[name]) return this;
    // // 注册过的场合
    // const cbs = this._events[name];
    // for (const cb of cbs) {
    //   cb(params);
    // }

    // 另一种写法
    (this._events[name] || (this._events[name] = [])).forEach(cb => cb(params));
    return this;
  }

  /**
   * 移除监听
   * @param {*} name 
   * @param {*} callback 
   */
  off(name, callback) {
    // // 没有注册过的场合
    // if (!this._events[name]) return this;
    // // 注册过的场合
    // const cbs = this._events[name];
    // this._events[name] = cbs.filter(cb => cb !== callback);

    // 另一种写法
    this._events[name] = (this._events[name] || (this._events[name] = [])).filter(cb => cb !== callback);
    return this;
  }
}

const ee = new EventEmitter();

const log1 = (params) => {
  console.log('log1 ---- ' + params);
}
const log2 = (params) => {
  console.log('log2 ---- ' + params);
}
const log3 = (params) => {
  console.log('log3 ---- ' + params);
}
const log4 = (params) => {
  console.log('log4 ---- ' + params);
}
const log5 = (params) => {
  console.log('log5 ---- ' + params);
}

ee.on('update', log1);
ee.on('update', log2);
ee.on('update', log3);
ee.once('update1', log4);
ee.once('update1', log5);

ee.emit('update', 'xxx');
// ee.emit('update', 'yyyy');
// ee.emit('update1', 'update1');
// ee.emit('update1', 'update1');

ee.off('update', log1);
ee.emit('update', 'xxx');
// ee.emit('update1', 'update1');

// ee.off('update', log1);
// ee.emit('update', 'xxx');
// ee.emit('update1', 'update1');

// ee.off('update1', log4);
// ee.emit('update', 'xxx');
// ee.emit('update1', 'update1');


