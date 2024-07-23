async function getName() {
  return "Mike";
}

console.log(getName()); //Promise { 'Mike' }

getName().then((name) => {
  console.log(name);
});

//await

async function showName() {
  const result = await getName("Mike");
  console.log(result);
}
