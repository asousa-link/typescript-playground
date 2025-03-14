type DataStore = {
    // dynamic properties of undefined name may be added as long as their names are strings and return numbers or booleans:
    [prop: string]: number | boolean;
};

let store: DataStore = {};

store.id = 5;
store.isOpen = false;
//store.name = "Ok"; // Doesn't work
// store.1 = false; // Doesn't work

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push("max"); // Doesn't work
const firstRole = roles[0];