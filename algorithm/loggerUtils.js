
function LoggerUtils() {
  this.count = 0;
  this.log = function(array) {
    this.count++;
    console.log(`第${array.length > 9 && this.count < 10 ? " ": ""} ${this.count} 次循环结果: `, array.join("   "));
  }
}