//문자열
const name1 = "Mike";
const name2 = "Mike";
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = "I'm a boy.";
const message3 = `My name is ${name}.`;
const message4 = `나는 ${age + 1}살 입니다.`;

//숫자
const x = 1 / 0;
console.log(x); // Infinity

const y = name / 2;
console.log(y); // NaN : not a number

//null, undefined
let name4 = "null";
let age;

console.log(name4); //null
console.log(age); //undefined

//typeof
const name5 = "Mike";

console.log(typeof 3); //number
console.log(typeof name5); //string
console.log(typeof true); //boolean
console.log(typeof "xxx"); //string
console.log(typeof null); //object
console.log(typeof undefined); //undefined
