// 객체 구조 분해: 새로운 변수 이름으로 할당

let user = { name: "Mike", age: 30 };
let { name: userName, age: userAge } = user;

console.log(userName); //Mike
console.log(userAge); //30
