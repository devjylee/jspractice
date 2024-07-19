function makeCounter() {
  let num = 0;

  return function () {
    //내부 함수이자 클로저. 외부함수에 접근 가능하게 함.
    return num++;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
