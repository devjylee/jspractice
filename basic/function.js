function showError() {
  alert("에러가 발생했습니다. 다시 시도해주세요.");
}
showError();

function sayHello(name) {
  let msg = "Hello";
  if (name) {
    msg += `, ${name}`;
  }
  console.log(msg);
}
sayHello("Mike");
sayHello();
