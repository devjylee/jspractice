const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};

User.prototype.showName = function () {
  console.log(this.name);
};

const mike = new User("Mike", 30);

mike.showName();
console.log(mike);

class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19);

tom.showName();
console.log(tom);

for (const p in mike) {
  console.log(p);
}