function* fn() {
  try {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    console.log(4);
    yield 3;
    return "finish";
  } catch (e) {
    console.log(e);
  }
}

const a = fn();
a.next(); //1
a.next(); //2
a.next(); //3 4
a.next();
a.return();
a.throw(new Error("err"));
