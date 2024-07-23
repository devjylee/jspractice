//extends

class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}

class Bmw extends Car {
  constructor() {
    super();
    this.navigation = 1;
  }
  park() {
    console.log("PARK");
  }
  stop() {
    console.log("OFF");
  }
}

const z4 = new Bmw("blue");
z4.stop(); //OFF
console.log(z4);
