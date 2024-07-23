const car = {
  wheels: 4,
  drive() {
    console.log("drive...");
  },
};

const bmw = {
  color: "red",
  navigation: 1,
};

const benz = {
  color: "black",
};

const audi = {
  color: "blue",
};

bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

console.log(bmw.wheels);

const x5 = {
  color: "white",
  name: "x5",
};

x5.__proto__ = bmw;

for (p in x5) {
  if (x5.hasOwnProperty(p)) {
    console.log("o", p);
  } else {
    console.log("x", p);
  }
}
