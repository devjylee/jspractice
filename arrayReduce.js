let arr = [1, 2, 3, 4, 5];
let result = 0;

arr.forEach((num) => {
  result += num;
});

console.log(result); //15

const result2 = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0); //0 prev에 들어갈 값

console.log(result2); //15
