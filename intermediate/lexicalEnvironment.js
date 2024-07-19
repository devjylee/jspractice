let one;
one = 1;

function addOne(num) {
  console.log(one + num);
}

addOne(5);

//전역 Lexical 환경
//one: 1
//addOne: function
//num: 5
