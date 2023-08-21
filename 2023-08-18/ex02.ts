import { Circle, Shape, Triangle } from './ex01';

// polymorphic method
// while the argument expected is a Shape, we can pass any implementation of Shape like Circle or Triangle
function processShape(shape: Shape): void {
  console.log(
    `area of the given ${shape.getShapeName()} is ${shape.getArea()}`
  );
}

processShape(new Circle(1.2));
processShape(new Triangle(1.2, 1.2));
