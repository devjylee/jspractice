let boy = {
  name: "Mike",
  sayThis: () => {
    console.log(this); //window를 가리킴
  },
};
boy.sayThis(); //error
