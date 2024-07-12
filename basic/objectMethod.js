let boy = {
  name: "Mike",
  showName: function () {
    console.log(boy.name);
  },
};
boy.showName(); //"Mike"

let man = boy;
man.name = "Tom";
console.log(boy.name); //"Tom"
man.showName(); //"Tom"

boy = null;
man.showName(); // error
