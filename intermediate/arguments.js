function showName(name) {
  console.log(name);
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}

showName("Mike"); //Mike 1 Mike undefined
showName("Mike", "Tom"); //Mike 2 Mike Tom
showName(); //undefined 0 undefined undefined
