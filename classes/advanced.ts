class User {
    protected _firstName = "";
    protected _lastName = "";

    set firstName(name: string) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._lastName = name;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    static eid = "USER";

    static greet() {
        console.log("Hello!");
    }

}

console.log(User.eid);
User.greet();

const afonso2 = new User();
afonso2.firstName = "Afonso";
afonso2.lastName = "Sousa";
console.log(afonso2.fullName);

// Inheritance
class Employee extends User {
    constructor (public jobTitle: string) {
        super();
    }

    work() {
        console.log(this._firstName);
    }
}

abstract class UIElement {
    constructor (public identifier: string) {}

    clone(targetLocation: string) {
        // logic to duplicate UI element
    }
}

class SideDrawerElement extends UIElement {
    constructor (public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }
}

// let uiElement = new UIElement(); // Doesn't work
let sidedrawer = new SideDrawerElement("sidedrawer", "right");