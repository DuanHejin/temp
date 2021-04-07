/**
 * Created by yh100019 on 2021/03/30
 */

/* 工具 */
var isPromise = function isPromise(val) {
    if (val == null) return false;
    if (/^function|object$/i.test(typeof val)) {
        return typeof val.then === 'function' && typeof val.catch === 'function';
    }
    return false;
}

var handle = function handle(newPromise, res, resolve, reject) {
    if (newPromise === res) throw new TypeError('Chaining cycle detected for promise #<Promise>');

    if (isPromise(res)) {
        try {
            res.then(function (result) {
                resolve(result);
            }, reject);
        } catch (err) {
            reject(err);
        }
        return;
    }
    resolve(res);
}

/* 核心 */
function Promise(executor) {
    if (typeof executor !== 'function') throw new TypeError('Promise resolver ' + executor + ' is not a function');

    var self = this,
        change;

    self.state = 'pending';
    self.result = undefined;
    self.onfulfilledCallbacks = [];
    self.onrejectedCallbacks = [];
    change = function change(state, result) {
        if (self.state !== 'pending') return;
        self.state = state;
        self.result = result;
        if (self.onfulfilledCallbacks.length === 0 && self.onrejectedCallbacks.length === 0) return;
        setTimeout(function () {
            var callbacks = self.state === 'fulfilled' ? self.onfulfilledCallbacks : self.onrejectedCallbacks,
                i = 0,
                len = callbacks.length,
                item;
            for (; i < len; i++) {
                item = callbacks[i];
                item(result);
            }
        });
    }

    try {
        executor(function (result) {
            change('fulfilled', result);
        }, function (resaon) {
            change('rejected', resaon);
        });
    } catch (err) {
        change('rejected', err);
    }
}

Promise.prototype = {
    constructor: Promise,
    customType: true, //我愿意
    then: function (onfulfilled, onrejected) {
        var self = this,
            newPromise;

        if (typeof onfulfilled !== 'function') {
            onfulfilled = function onfulfilled(result) {
                return result;
            }
        }
        if (typeof onrejected !== 'function') {
            onrejected = function onrejected(reason) {
                throw reason;
            }
        }

        newPromise = new Promise(function (resolve, reject) {
            var res;
            switch (self.state) {
                case 'fulfilled':
                    setTimeout(function () {
                        try {
                            res = onfulfilled(self.result);
                            handle(newPromise, res, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                    break;
                case 'rejected':
                    setTimeout(function () {
                        try {
                            res = onrejected(self.result);
                            handle(newPromise, res, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                    break;
                default:
                    self.onfulfilledCallbacks.push(function () {
                        try {
                            res = onfulfilled(self.result);
                            handle(newPromise, res, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                    self.onrejectedCallbacks.push(function () {
                        try {
                            res = onrejected(self.result);
                            handle(newPromise, res, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                    break;
            }
        });
        return newPromise;
    },
    catch: function (onrejected) {
        var self = this;
        return self.then(null, onrejected);
    },
    finally: function (callback) {
        var self = this;
        return self.then(function (result) {
            return Promise.resolve(callback()).then(function () {
                return result
            });
        }, function (reason) {
            return Promise.resolve(callback()).then(function () {
                throw reason;
            });
        });
    },
}

if (typeof Symbol !== 'undefined') {
    Promise.prototype[Symbol.toStringTag] = 'Promise';
}

Promise.resolve = function (value) {
    return new Promise(function (resolve, reject) {
        resolve(value);
    })
}

Promise.reject = function () {
    return new Promise(function (_, reject) {
        reject(value);
    })
}

Promise.all = function (promises) {
    var hefa = true,
        i = 0,
        len = promises.length,
        index = 0,
        item,
        results = [];
    typeof Symbol !== 'undefined' ? (typeof promises[Symbol.iterator] !== 'function' ? hefa = false : null) : (!Array.isArray(promises) ? hefa = false : null);

    if (!hefa) throw new TypeError(promises + 'is not iterable ');
    return new Promise(function (resolve, reject) {
        for (; i < len; i++) {
            (function (i) {
                item = promises[i];
                if (!isPromise(item)) item = Promise.resolve(item);

                item.then(function (result) {
                    index++;
                    results[i] = result;
                    if (index >= len) resolve(results);
                }, reject);
            })(i);
        }
    })
}

if (window.Promise !== undefined) {
    window.Promise = Promise;
}

if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = Promise;
}