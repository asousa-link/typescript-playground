function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('LOGGER:');
    console.log(target);
    console.log(ctx);

    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    }
}

@logger
class Person {
    name = "Afonso";
    
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

const afonso = new Person();
const cris = new Person();