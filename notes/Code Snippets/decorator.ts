// Decorator function
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    // Keep a reference to the original method
    const originalMethod = descriptor.value;
  
    // Modify the descriptor's value function
    descriptor.value = function (...args: any[]) {
      console.log(`Calling method ${key} with arguments: ${JSON.stringify(args)}`);
      
      // Call the original method
      const result = originalMethod.apply(this, args);
  
      console.log(`Method ${key} returned: ${JSON.stringify(result)}`);
      
      return result;
    };
  
    return descriptor;
  }
  
  // Example class with a method decorated with the 'log' decorator
  class ExampleClass {
    addNumbers(a: number, b: number): number {
      return a + b;
    }
  }
  
  // Create an instance of the class
  const exampleInstance = new ExampleClass();
  
  // Call the decorated method
  const result = exampleInstance.addNumbers(3, 7);

  console.log(`Result: ${result}`);