const height = 100;

function bounceHeight(time) {
  return height / (2 ** time);
}

const times = 10;

let total = 0;
for (let i = 1; i <= times; i++) {
  total += 2 * bounceHeight(i - 1);
}

console.log('total :>> ', total);
console.log('bounceHeight(10) :>> ', bounceHeight(10));
