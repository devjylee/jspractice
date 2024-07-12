function sayHello(name) {
  let newName = name || "friend";
  let msg = `Hello, ${newName}`;
  console.log(msg);
}

sayHello("Mike"); // Hello, Mike
sayHello(); // Hello, friend

function sayHello(name = "friend") {
  let msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello("Mike"); // Hello, Mike
sayHello(); // Hello, friend
