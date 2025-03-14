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

// satisfies infers a more specific type as long as it satisfies the more broad type
const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;

dataEntries.entry2;
//dataEntries.entry3; // Doesn't work