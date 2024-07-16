//indexOf
function hasCola(str) {
  if (str.indexOf("콜라") > -1) {
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과");
  }
}

hasCola("사이다가 최고"); //-1
hasCola("무슨소리, 콜라가 최고"); //6
hasCola("콜라"); //0

//includes
function hasCola2(str) {
  if (str.includes("콜라")) {
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과");
  }
}

hasCola2("사이다가 최고");
hasCola2("무슨소리, 콜라가 최고");
hasCola2("콜라");
