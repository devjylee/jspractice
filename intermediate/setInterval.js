function showName(name) {
  console.log(name);
}

const tId = setInterval(showName, 3000, "Mike");
clearInterval(tId);
