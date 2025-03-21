namespace App {
  // Autobind decorator
  export function autobind(_: Function, ctx: ClassMethodDecoratorContext) {
    ctx.addInitializer(function (this: any) {
      this[ctx.name] = this[ctx.name].bind(this);
    });
  }
}
