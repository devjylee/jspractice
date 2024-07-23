//call
//모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있다

const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}

showThisName(); //undefined (windows.this를 가리키기 때문)
showThisName.call(mike); //Mike
showThisName.call(tom); //Tom

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 1999, "singer");
update.call(tom, 2002, "teacher");

console.log(mike); //{ name: 'Mike', birthYear: 1999, occupation: 'singer' }
console.log(tom); //{ name: 'Tom', birthYear: 2002, occupation: 'teacher' }
