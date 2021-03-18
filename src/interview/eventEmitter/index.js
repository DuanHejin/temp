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

  /**
   * 监听
   * @param {*} name 
   * @param {*} callback 
   */
  on(name, callback) {

  }

  /**
   * 监听一次
   * @param {*} name 
   * @param {*} callback 
   */
  once(name, callback) {

  }

  /**
   * 触发
   * @param {*} name 
   * @param {*} params 
   */
  emit(name, params) {

  }

  /**
   * 移除监听
   * @param {*} name 
   * @param {*} callback 
   */
  off(name, callback) {

  }
}