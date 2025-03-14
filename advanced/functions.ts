// We cannot define the function with the same name twice with different bodies so we can just use multiple signatures
// One function body, multiple signatures
function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
    if (typeof val === "string") {
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }

    return val.length;
}

const numOfWords = getLength('does this work?');
console.log(numOfWords, numOfWords.length);
const numItems = getLength(['Sports', 'Cookies']);
console.log(numItems);