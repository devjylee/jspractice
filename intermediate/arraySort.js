let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr); //[ 1, 2, 3, 4, 5 ]

let arr2 = ["a", "c", "b", "e", "d"];
arr2.sort();
console.log(arr2); //[ 'a', 'b', 'c', 'd', 'e' ]

let arr3 = [27, 8, 5, 13];
arr3.sort();
console.log(arr3); //[ 13, 27, 5, 8 ]

function fn(a, b) {
  // console.log(a, b);
  // console.log(a - b);
  return a - b;
}
arr3.sort(fn);
console.log(arr3); //[ 5, 8, 13, 27 ]
