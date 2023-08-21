type TableProps = {
  name: string;
};

// decorator factory; manufactures and returns a decorator
function Table(props: TableProps) {
  console.log({ props });
  // return value from this function is the actual decorator
  return function (target: Function) {
    // do stuff here
    console.log('target.name is', target.name);
  };
}

@Table({ name: 'employees' })
class Employee {
  private id!: number;
  private name!: string;
  private salary!: number;
}

@Table({ name: 'customers' })
class Customer {}
