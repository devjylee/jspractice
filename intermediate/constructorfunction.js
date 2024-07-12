function User(name, age) {
  // this = {};

  this.name = name;
  this.age = age;

  // return this;
  // new로 호출하면 자동으로 생성
}

let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);

console.log(user1); //User { name: 'Mike', age: 30 }
console.log(user2); //User { name: 'Jane', age: 22 }
console.log(user3); //User { name: 'Tom', age: 17 }
