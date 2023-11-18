/*
filename: complex_code.js
content: Complex code demonstrating various JavaScript concepts and functionality.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, designation) {
    super(name, age);
    this.designation = designation;
  }

  work() {
    console.log(`${this.name} (${this.designation}) is working...`);
  }
}

const person1 = new Person('John Doe', 25);
person1.sayHello();

const employee1 = new Employee('Jane Smith', 30, 'Software Engineer');
employee1.sayHello();
employee1.work();

// Complex async function
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error fetching data: ${error}`);
  }
}

fetchData('https://api.example.com/data');

// Complex recursive function
function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

// Complex higher-order function
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const triple = multiplyBy(3);
console.log(triple(5));

// Complex closure example
function outerFunction(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = outerFunction(5);
console.log(add5(3));

// ... Rest of the code (over 200 lines) goes here
// Please note that the above code demonstrates only a fraction of complex JavaScript concepts.