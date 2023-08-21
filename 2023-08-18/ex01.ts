export interface Shape {
  getArea(): number;
  getShapeName(): string;
}

export class Circle {
  constructor(private radius: number = 1) {}
  getShapeName(): string {
    return 'circle';
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Triangle implements Shape {
  constructor(private base: number = 1, private height: number = 1) {}
  getShapeName(): string {
    return 'triangle';
  }

  getArea(): number {
    return 0.5 * this.base * this.height;
  }
}

function main() {
  let c1: Shape, t1: Shape;
  c1 = new Circle();
  t1 = new Triangle(1.2, 3.4);

  console.log(`type of c1 is ${typeof c1}`);
  console.log(`c1 instanceof Circle is ${c1 instanceof Circle}`);
  console.log(`c1 instanceof Triangle is ${c1 instanceof Triangle}`);
  console.log(`area of circle c1 is ${c1.getArea()}`);
  console.log(`c1 is`, c1);

  console.log(`type of t1 is ${typeof t1}`);
  console.log(`t1 instanceof Triangle is ${t1 instanceof Triangle}`);
  console.log(`t1 instanceof Circle is ${t1 instanceof Circle}`);
  console.log(`area of triangle t1 is ${t1.getArea()}`);
  console.log(`t1 is`, t1);
}

// main();
