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
    };
    this.on(name, wrapFn);
    return this;
  }

  /**
   * 触发
   * @param {*} name 
   * @param {*} params 
   */
  emit(name, params) {
    (this._events[name] || (this._events[name] = [])).forEach(cb => cb(params));
    return this;
  }

  /**
   * 移除监听
   * @param {*} name 
   * @param {*} callback 
   */
  off(name, callback) {
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
ee.emit('update', 'yyyy');
ee.emit('update1', 'update1');
ee.emit('update1', 'update1');

ee.off('update', log1);
ee.emit('update', 'xxx');
// ee.emit('update1', 'update1');

// ee.off('update', log1);
// ee.emit('update', 'xxx');
// ee.emit('update1', 'update1');

// ee.off('update1', log4);
// ee.emit('update', 'xxx');
// ee.emit('update1', 'update1');

