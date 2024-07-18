// 배열 구조 분해: 기본값

//let [a, b, c] = [1, 2];
// c: undefined

let [a = 3, b = 4, c = 5] = [1, 2];

console.log(a); //1
console.log(b); //2
console.log(c); //5
