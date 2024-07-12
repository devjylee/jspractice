// 전역변수
let msg = "Welcome";
console.log(msg); // Welcome

function sayHello(name) {
  // 지역변수
  let msg = "Hello";
  console.log(msg + ", " + name);
}

sayHello("Mike"); // Hello, Mike

console.log(msg); // Welcome

// 변수의 범위
let name = "Mike";

function sayHello(name) {
  console.log(name);
}

sayHello(); // undefined
sayHello("Jane"); //Jane
