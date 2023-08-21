export function LogExecutionTime(
  target: any,
  property: string,
  descriptor: TypedPropertyDescriptor<any>
) {
  // temporarily hold on to the original method on which this decorator is applied on
  const originalMethod = descriptor.value;

  // replace the original method with our own method.
  // this method checks for performance and also calls the original method.
  descriptor.value = function (...args: any) {
    const startTime = performance.now();
    const result = originalMethod.apply(this, args); // original method
    const endTime = performance.now();
    console.log(
      `total time taken for '${property}' method is ${endTime - startTime}ms`
    );
    return result;
  };
}
