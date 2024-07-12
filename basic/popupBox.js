//prompt
const name1 = prompt("이름을 입력하세요.");
const name2 = prompt("이름을 입력하세요.", "지윤"); //디폴트 값 설정

//alert
alert("환영합니다, " + name1 + "님.");
alert(`환영합니다, ${name2}님.`);

//confirm
const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult);
