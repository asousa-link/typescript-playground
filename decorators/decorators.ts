function logger<T extends new (...args: any[]) => any>(target: T, ctx: ClassDecoratorContext) {
    console.log('LOGGER:');
    console.log(target);
    console.log(ctx);

    return class extends target {
        age = 31;
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
console.log(afonso);