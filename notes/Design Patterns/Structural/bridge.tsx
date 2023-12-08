// Bridge is a structural design pattern that divides business logic or huge class
//  into separate class hierarchies that can be developed independently.

// One of these hierarchies (often called the Abstraction) will get a reference to an object of the second hierarchy (Implementation). 
// The abstraction will be able to delegate some (sometimes, most) of its calls to the implementations object. 
// Since all implementations will have a common interface, they’d be interchangeable inside the abstraction.

// Implementor: Color
interface Color {
    fill(): string;
  }
  
  // Concrete Implementations of Color
  class Red implements Color {
    fill(): string {
      return "Red";
    }
  }
  
  class Blue implements Color {
    fill(): string {
      return "Blue";
    }
  }
  
  // Abstraction: Shape
  abstract class Shape {
    constructor(protected color: Color) {}
  
    abstract draw(): string;
  }
  
  // Concrete Implementations of Shape
  class Circle extends Shape {
    draw(): string {
      return `Drawing a Circle in ${this.color.fill()}`;
    }
  }
  
  class Square extends Shape {
    draw(): string {
      return `Drawing a Square in ${this.color.fill()}`;
    }
  }
  
  // Client code
  const red = new Red();
  const blue = new Blue();
  
  const redCircle = new Circle(red);
  const blueSquare = new Square(blue);
  
  console.log(redCircle.draw());   // Drawing a Circle in Red
  console.log(blueSquare.draw());  // Drawing a Square in Blue