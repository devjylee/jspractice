function* fn() {
  yield 4;
  yield 5;
  yield 6;
}

const a = fn();

console.log(a[Symbol.iterator]() === a);

for (let num of a) {
  console.log(num);
}
