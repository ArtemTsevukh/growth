// In this example, ResultType is a union type that can be either a string or a number. 
// The combineValues function takes two parameters of type ResultType and performs different operations based 
// on the types of the input values. 
// It demonstrates how you can use union types to handle different scenarios within a single function or piece of code.
// Define a union type
type ResultType = string | number;

// Function that takes two values of the same type from the union
function combineValues(a: ResultType, b: ResultType): ResultType {
  if (typeof a === 'string' || typeof b === 'string') {
    // If either a or b is a string, concatenate them
    return `${a}${b}`;
  } else {
    // If both are numbers, add them
    return a + b;
  }
}

// Examples
const result1: ResultType = combineValues('Hello', ' TypeScript');
console.log(result1); // Output: Hello TypeScript

const result2: ResultType = combineValues(5, 10);
console.log(result2); // Output: 15