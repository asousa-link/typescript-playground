// Decorators are executed when the class is defined,
// NOT when it's instantiated!
function Logger(logString: string = "Logging...") {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template...");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent += ": " + this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My person object</h1>", "app")
class Person {
  name = "Afonso";

  constructor() {
    console.log("Creating person object...");
  }
}

// const pers = new Person();

// console.log(pers);

function LogProperty(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogMethod(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogParameter(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @LogProperty
  title: string;
  private _price: number;

  @LogAccessor
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @LogMethod
  getPriceWithTax(@LogParameter tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
