const inputEl = document.getElementById('user-name');

// must account for null (type narrowing)
// if (!inputEl) {
//     throw new Error('Element not found!');
// }

console.log(inputEl?.value);