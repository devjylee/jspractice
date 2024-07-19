function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = makeAdder(3);
console.log(add3(2)); //5
//add3함수가 생성된 이후에도 상위함수인 makeAdder의 x에 접근 가능

//전역 Lexical 환경
//makeAdder: function
//add3: function

//makeAdder Lexical 환경
//x: 3

//익명함수 Lexical 환경
//y: 2

const add10 = makeAdder(10);
console.log(add10(5)); //15
console.log(add3(1)); //4
