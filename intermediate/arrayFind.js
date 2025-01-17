let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 27 },
  { name: "Tom", age: 10 },
];

const result = userList.find((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result); // { name: 'Tom', age: 10 }

const result2 = userList.findIndex((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});

console.log(result2); // 2
