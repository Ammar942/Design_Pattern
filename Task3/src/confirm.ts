import { showModal } from "./modal";

export function Confirm(message: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value;
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    console.log(method);
    descriptor.value = async function (...args: any[]) {
      console.log(...args);
      const confirmed = await showModal(message);
      if (confirmed) {
        return method.call(this, ...args);
      }
      return;
    };
    return descriptor;
  };
}
