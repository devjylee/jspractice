// 객체 복사
const user = {
  name: "Mike",
  age: 30,
};

const user2 = user;
user2.name = "Tom";

console.log(user); //기존 user의 이름도 바뀜
console.log(user2);

//Object.assign()
user.name = "Mike";
const user3 = Object.assign({}, user);
user3.name = "Jane";

console.log(user);
console.log(user3);

//Object.keys/values/entries()
const result1 = Object.keys(user);
const result2 = Object.values(user);
const result3 = Object.entries(user);

console.log(result1);
console.log(result2);
console.log(result3);

//배열을 객체로 만들기
//Object.fromEntries()
let arr = [
  ["mon", "월"],
  ["thu", "화"],
];

const result4 = Object.fromEntries(arr);
console.log(result4);
