// Decorators are executed when the class is defined,
// NOT when it's instantiated!
function Logger(logString: string = "Logging...") {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Afonso";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);
