let boy = {
  name: "Mike",
  sayThis: function () {
    console.log(this);
  },
};
boy.sayThis(); //{"name": "Mike","sayThis": function () {\n    console.log(this);\n  }}
