function add(...numbers) {
  let result = numbers.reduce((prev, cur) => prev + cur);
  //   let result = 0;
  //   numbers.forEach((num) => {
  //     result += num;
  //   });
  console.log(result);
}

add(1, 2, 3); //6
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55
