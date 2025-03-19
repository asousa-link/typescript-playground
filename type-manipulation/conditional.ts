type StringArray = string[];
//type ElementType<T extends any[]> = T[number]; //only works with arrays

type GetElementType<T> = T extends any[] ? T[number] : T; // returns T if it's not an array and the element type in T if it is an array

let text = "abc";
type Example = GetElementType<typeof text>;
type Example2 = GetElementType<StringArray>;