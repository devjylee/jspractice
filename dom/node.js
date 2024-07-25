//선택
const ul = document.getElementById("color");
const li = document.getElementById("li");
const red = document.getElementById("red");

//red node
const redTextNode = red.firstChild;
redTextNode.nodeName; //#text
redTextNode.nodeType; //3
redTextNode.nodeValue; //red

//nodeValue 바꾸기
redTextNode.nodeValue = "빨강";

//ul node
ul.nodeName; //UL
ul.nodeType; //1
ul.nodeType; //null
ul.textContent; //'\n    \n    Blue\n    Green\n  '

//마크업 적용
ul.innerHTML = "<li>Red</li>";

//새 태그 생성
const newLi = document.createElement("li");
const black = document.createTextNode("Black");
newLi.appendChild(black);
ul.appendChild(newLi);

//리스트 첫번째에 삽입
ul.insertBefore(newLi, red);

//노드 복제
const newBlack = newLi.cloneNode(true);
ul.appendChild(newBlack);

//삭제
ul.removeChild(red);
ul.removeChild(ul.firstElementChild);
ul.removeChild(ul.lastElementChild);
