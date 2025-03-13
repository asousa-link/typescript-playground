let userName: string;
let userAge = 31;

userName = 'Afonso';

function add(a: number, b = 5) {
    return a + b;
}

add(1, 2);
add(3);