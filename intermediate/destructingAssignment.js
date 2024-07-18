// 배열 구조 분해

let [x, y] = [1, 2];
console.log(x); //1
console.log(y); //2

let users = ["Mike", "Tom", "Jane"];
let [user1, user2, user3] = users;
//let user1 = users[0]; let user2 = users[1]; let user3 = users[2];

console.log(user1); //Mike
console.log(user2); //Tom
console.log(user3); //Jane

let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split("-");

console.log(user4); //Mike
console.log(user5); //Tom
console.log(user6); //Jane
