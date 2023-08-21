import { Circle, Shape, Triangle } from './ex01';

// let shapes: Shape[];
let shapes: Array<Shape>;

shapes = [
  new Circle(1.2),
  new Triangle(1.2, 3.4),
  new Triangle(11, 22),
  new Circle(34.56),
];

let areas: number[] = shapes.map((s) => s.getArea());

shapes.forEach((s, i) =>
  console.log(`${i + 1}. area of ${s.getShapeName()} is ${s.getArea()}`)
);

areas.forEach((a) => console.log(a));
