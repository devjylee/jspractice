const Mike = {
  name: "Mike",
  age: 30,
};

for (key in Mike) {
  console.log(key); // "name", "age"
  console.log(Mike[key]); //"name", "Mike", "age", 30
}
