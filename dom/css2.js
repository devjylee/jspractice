//클래스 이름 설정
box.className = "bg-blue txt-pink";

//클래스 리스트에 추가
box.classList.add("txt-white");
box.classList.add("bg-green", "txt-yellow");

//클래스 리스트에서 제거
box.classList.remove("txt-white");

//클래스 리스트에서 대체
box.classList.replace("bg-red", "bg-blue");

//클래스 리스트에서 없으면 추가, 있으면 제거
setInterval(() => {
  box.classList.toggle("bg-green");
}, 1000);

//선택했을 때 텍스트 색 바꾸기
color.onclick = function (e) {
  const target = e.target;
  if (target.tagName !== "LI") return;
  target.classList.toggle("txt-pink");
};
