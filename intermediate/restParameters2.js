function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
//나머지 매개변수는 늘 마지막에 존재해야 함

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "js", "react");
const user3 = new User("Jane", 10, "English");

console.log(user1);
console.log(user2);
console.log(user3);
