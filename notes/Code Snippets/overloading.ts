// In this example, the greet function has two overload signatures that specify the allowed parameter combinations. 
// The actual implementation follows, using the optional parameter age. 
// The function can be called with just a name or with both a name and an age.

// Function overload signatures
function greet(name: string): string;
function greet(name: string, age: number): string;

// Function implementation
function greet(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}! You are ${age} years old.`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Examples
const greeting1 = greet('Alice');
console.log(greeting1); // Output: Hello, Alice!

const greeting2 = greet('Bob', 25);
console.log(greeting2); // Output: Hello, Bob! You are 25 years old.