// This is a JavaScript comment

// Function to display a greeting message
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Call the greet function
greet("John");

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Call the add function and store the result in a variable
const sum = add(5, 3);
console.log(`5 + 3 = ${sum}`);

// Define an object representing a person
const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    hobbies: ["Reading", "Hiking", "Painting"],
    greet: function () {
        console.log(`Hello, I'm ${this.firstName} ${this.lastName}.`);
    },
};

// Access properties and call methods of the person object
console.log(`${person.firstName} is ${person.age} years old.`);
console.log(`Her hobbies include: ${person.hobbies.join(", ")}`);
person.greet();

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Loop through the array and print each number
console.log("Numbers in the array:");
for (let number of numbers) {
    console.log(number);
}

// Use a conditional statement to check if a number is even or odd
const numToCheck = 6;
if (numToCheck % 2 === 0) {
    console.log(`${numToCheck} is even.`);
} else {
    console.log(`${numToCheck} is odd.`);
}

// You can add more JavaScript code as needed for your specific project
