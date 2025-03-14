/* class User {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
} */

// Alternative
class User {
    constructor (public name: string, public age: number) { }
};

const afonso = new User("Afonso", 31);
const fred = new User("Fred", 35);

console.log(afonso, fred);