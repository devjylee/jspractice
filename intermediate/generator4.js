function* gen1() {
  yield "w";
  yield "o";
  yield "r";
  yield "l";
  yield "d";
}

function* gen2() {
  yield "Hello,";
  yield* gen1(); //반복 가능한 모든 개체가 올 수 있음
  yield "!";
}

console.log(...gen2()); //Hello, w o r l d !
