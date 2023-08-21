function Log(target: Function) {
  console.log(`@Log applied on ${target.name}`);
}

function LogMethod(target: any, property: string) {
  console.log('LogMethod called...');
  console.log('target.name is', target);
  console.log('property is', property);
}

@Log
class Person {
  constructor(private name: string = '', private city: string = '') {}

  @LogMethod
  print(): void {
    console.log(`name = ${this.name}`);
    console.log(`city = ${this.city}`);
  }
}
