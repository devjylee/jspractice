//복제
let arr = [1, 2, 3];
let arr2 = [...arr];

console.log(arr2); //[ 1, 2, 3 ]

let user = { name: "Mike", age: 30 };
let user2 = { ...user };

user2.name = "Tom";

console.log(user.name); //Mike
console.log(user2.name); //Tom
