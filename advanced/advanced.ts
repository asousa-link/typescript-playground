type DataStore = {
    // dynamic properties of undefined name may be added as long as their names are strings and return numbers or booleans:
    [prop: string]: number | boolean;
};

let store: DataStore = {};

store.id = 5;
store.isOpen = false;
//store.name = "Ok"; // Doesn't work
// store.1 = false; // Doesn't work