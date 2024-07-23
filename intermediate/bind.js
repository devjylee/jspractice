//bind
//함수의 this값을 영구히 바꿀 수 있음

const mike = { name: "Mike" };

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateMike = update.bind(mike);

updateMike(1980, "police");
console.log(mike); //{ name: 'Mike', birthYear: 1980, occupation: 'police' }
