function *febonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const res = [];
for (const it of febonacci()) {
  if (it > 1000) {
    break;
  }
  res.push(it);
}
console.log('res.join(", ") :>> ', res.join(", "));