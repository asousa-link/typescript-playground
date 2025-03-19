// Decorators are executed when the class is defined,
// NOT when it's instantiated!
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Afonso";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
