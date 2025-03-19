function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("LOGGER:");
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

// Binds the "this" in methods to the class they belong to
function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log("Executing original function");
    target.apply(this); // Just using "target" will return the old function without the initializer
  };
}

@logger
class Person {
  name = "Afonso";

  @autobind
  greet() {
    console.log("Hi, I am " + this.name);
  }
}

const afonso = new Person();
const greet = afonso.greet;
greet(); // gets typeError (undefined "this") when compiling without the @autobind decorator
