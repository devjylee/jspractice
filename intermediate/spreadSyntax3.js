let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// arr2.reverse().forEach((num) => {
//   arr1.unshift(num);
// });
// console.log(arr1); //[ 4, 5, 6, 1, 2, 3 ]

arr1 = [...arr2, ...arr1];
console.log(arr1); //[ 4, 5, 6, 1, 2, 3 ]
