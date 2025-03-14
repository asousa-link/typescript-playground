class User2 {
    private _firstName = "";
    private _lastName = "";

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
}

const afonso2 = new User2();
afonso2.firstName = "Afonso";
afonso2.lastName = "Sousa";
console.log(afonso2.fullName);