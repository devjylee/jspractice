function* fn() {
  const num1 = yield "첫번째 숫자를 입력해주세요";
  console.log(num1);

  const num2 = yield "첫번째 숫자를 입력해주세요";
  console.log(num2);

  return num1 + num2;
}

const a = fn();

console.log(a.next());
console.log(a.next(2));
console.log(a.next(4));
console.log(a.next());
