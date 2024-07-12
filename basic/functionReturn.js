//return
function add(num1, num2) {
  return num1 + num2;
}

const result = add(2, 3);
console.log(result); //5

function showError() {
  alert("에러가 발생했습니다. 다시 시도해주세요.");
}

const result2 = showError();
console.log(result2); //undefined

//return으로 함수 종료
function showError() {
  alert("에러가 발생했습니다. 다시 시도해주세요.");
  return; // 함수 종료
  alert("이 코드는 실행되지 않습니다.");
}

const result3 = showError();
console.log(result3); //undefined
