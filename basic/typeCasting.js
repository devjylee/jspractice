//String() 문자열으로 변환

//Number() 숫자형으로 변환
const mathScore = Number(prompt("수학 점수"));
const engScore = Number(prompt("영어 점수"));
const result = (mathScore + engScore) / 2;
console.log(result);

//Boolean() 불린형으로 변환
console.log(Number(false), Number(true)); //0,1
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
); //false

console.log(
  Number("문자"), //NaN
  Number(null), //0
  Number(undefined) //NaN
);

console.log(
  Boolean(0), //false
  Boolean("0"), //true
  Boolean(""), //false
  Boolean(" ") //true
);
