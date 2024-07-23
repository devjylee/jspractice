//apply
//call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받음.

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

update.apply(mike, [1999, "singer"]);
update.apply(tom, [2002, "teacher"]);

console.log(mike); //{ name: 'Mike', birthYear: 1999, occupation: 'singer' }
console.log(tom); //{ name: 'Tom', birthYear: 2002, occupation: 'teacher' }
