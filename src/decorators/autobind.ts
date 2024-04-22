// Autobind Decorator
// function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
// OR
export function Autobind(_: any, _1: string, descriptor: PropertyDescriptor) {
  // console.log(descriptor);
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
