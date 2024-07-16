const user = {
  name: "Mike",
  age: 30,
};

//user.showName = function () {};
//His showName is function () {}.

//Symbol
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};

for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
//His name is Mike.
//His age is 30.

user[showName]();
//Mike
