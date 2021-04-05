var scope = 'global'
function log() {
  var args = Array.prototype.join.call(arguments, '')
  console.log('this :>> ', this);
  console.log(this.scope + ':' + args)
}
var dog = {
  scope: 'dog',
  yelp: function () {
    var scope = 'dog.yelp'
    console.log('this :>> ', this);
    log('wow')
  }
}
dog.yelp();
dog.yelp.call(dog);
log.call(dog, 'created');



var scope = 'global'
function log() {
  var args = Array.prototype.join.call(arguments, '')
  console.log('this :>> ', this);
  console.log(this.scope + ':' + args)
}
var dog = {
  scope: 'dog',
  log: log
};
dog.log('wow')
dog.log.call(dog, 'wow');
log.call(dog, 'created')


function foo() {
  a = 2;
  console.log('this :>> ', this);
  this.bar();
}
function bar() {
  console.log(this.a);
}
foo();
