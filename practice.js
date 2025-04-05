// --------------------------------------------------
// JavaScript Practice File for Core Concepts
// Topics: Variables, Data Types, Functions, Loops,
// Arrays, Object Operations, ES6, destructuring,spreading etc.
// --------------------------------------------------

//  Variables and Data Types
var city = "Hyderabad";
let temperature = 32.5;
const isSunny = true;
let unassigned;
let nothing = null;

console.log("City:", city);
console.log("Temperature:", temperature);
console.log("Is it sunny?", isSunny);
console.log("Unassigned:", unassigned);
console.log("Nothing:", nothing);

//  Operators
let x = 10;
let y = 4;
console.log("Add:", x + y);
console.log("subtracting a number from string:","mango"-y)
console.log("Subtract:", x - y);
console.log("Multiply:", x * y);
console.log("Divide:", x / y);
console.log("Modulus:", x % y);
console.log("Equal?", x === y);
console.log("Not Equal?", x !== y);

//  Named Function
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Asha"));

//  Anonymous Function (assigned to variable)
const welcome = function (name) {
  return "Welcome," + name;
};
console.log(welcome("Rahul"));

//  Arrow Function
const square = (num) => num * num;
console.log("Square of 6:", square(6));

//  Loops
for (let i = 0; i < 3; i++) {
  console.log("For loop:", i);
}

let counter = 0;
while (counter < 3) {
  console.log("While loop:", counter);
  counter++;
}
let c=0;
do{
    console.log("do While loop:", counter);
    c++;
}while(c<3);

//  Arrays & Operations
let colors = ["red", "green", "blue"];
console.log("Original colors:", colors);

// push - add to end
colors.push("yellow");
console.log("After push:", colors);

// pop - remove last
colors.pop();
console.log("After pop:", colors);

// unshift - add to beginning
colors.unshift("purple");
console.log("After unshift:", colors);

// shift - remove from beginning
colors.shift();
console.log("After shift:", colors);

// splice - remove/replace at index
colors.splice(1, 1, "orange");
console.log("After splice:", colors);

// slice - extract portion
let sliced = colors.slice(0, 2);
console.log("Sliced array:", sliced);


//  Objects & Manipulation
let student = {
  name: "Arun",
  age: 20,
  grade: "A",
};

student.city = "Chennai"; // add
console.log("grade" in student); //checking is that attribute is present in it or not
delete student.grade; // remove

console.log("Student object:", student);

//  Object Iteration
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
console.log(Object.keys(student));
console.log(Object.values(student));


//  Prototypes
function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.describe = function () {
  console.log("This is a " + this.type);
};

let car = new Vehicle("Car");
car.describe();

//  Destructuring
let [a, b] = [100, 200];
console.log("a:", a, "b:", b);

let { name, city: studentCity } = student;
console.log("Student name:", name, "City:", studentCity);

// Spread Operator
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2];
console.log("Combined array:", combined);

let newStudent = { ...student, country: "India" };
console.log("New student object:", newStudent);

// ES6 Features
const sayHi = (name = "Friend") => {
  console.log(`Hi, ${name}!`);
};
sayHi();
sayHi("Meena");

let fruit = "Mango";
let price = 25;
console.log(`The ${fruit} costs ₹${price}.`);

// let & const scope
{
  let local = "I am block scoped";
  console.log(local);
}
// console.log(local); // Uncommenting gives error
