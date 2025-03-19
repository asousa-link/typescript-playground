type StringArray = string[];
//type ElementType<T extends any[]> = T[number]; //only works with arrays

type GetElementType<T> = T extends any[] ? T[number] : T; // returns T if it's not an array and the element type in T if it is an array

let text = "abc";
type Example = GetElementType<typeof text>;
type Example2 = GetElementType<StringArray>;

type FullNamePerson = {firstName: string; lastName: string};
type FullnameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullname<T extends object>(person: T) : FullnameOrNothing<T> {
    if ('firstName' in person && 'lastName' in person && person.firstName && person.lastName) {
        return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
    };
    throw new Error('No first/last name found.')
};

const name1 = getFullname({});
const name2 = getFullname({firstName: "Afonso"});
const name3 = getFullname({firstName: "Afonso", lastName: "Sousa"});