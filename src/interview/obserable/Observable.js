class Observable {
  constructor() {
    this._events = {};
  }

  subscribe(name, callback) {
    (this._events[name] || (this._events[name] = [])).push(callback);
  }

  publish(name, params) {
    (this._events[name] || (this._events[name] = [])).forEach(cb => cb(params));
  }

  remove(name, callback) {
    const cbs = this._events[name] || (this._events[name] = []);
    const len = cbs.length;
    for (let i = 0; i < len; i++) {
      if (cbs[i] === callback) {
        cbs.splice(i, 1);
      }
    }
  }
}

const ob = new Observable;
ob.subscribe('add', console.log)
ob.publish('add', 'test');