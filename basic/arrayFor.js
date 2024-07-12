let days = ["mon", "tue", "wed"];

days[1] = "화요일";
days.push("thu");
days.unshift("sun");

console.log(days); //["sun","mon","화요일","wed","thu"]

for (let index = 0; index < days.length; index++) {
  console.log(days[index]);
}

for (let day of days) {
  console.log(day);
}
