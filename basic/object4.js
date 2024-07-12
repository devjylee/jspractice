function makeObject(name, age) {
  return {
    name: name,
    age: age,
    hobby: "football",
  };
}

const Mike = makeObject("Mike", 30);
console.log(Mike); //{"name": "Mike", "age": 30, "hobby": "football"}

console.log("age" in Mike); //true
console.log("birthday" in Mike); //false
