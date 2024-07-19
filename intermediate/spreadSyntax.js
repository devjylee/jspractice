let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result); //[ 1, 2, 3, 4, 5, 6 ]

let result2 = [0, ...arr1, ...arr2, 7, 8, 9];

console.log(result2); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let user = { name: "Mike" };
let mike = { ...user, age: 30 };

console.log(mike); //{ name: 'Mike', age: 30 }
