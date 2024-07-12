function isAdult(user) {
  if (!("age" in user) || user.age < 20) {
    return false;
  }
  return true;
}

const Mike = {
  name: "Mike",
  age: 30,
};

const Jane = {
  name: "Jane",
};

console.log(isAdult(Mike)); //true
console.log(isAdult(Jane)); //false
