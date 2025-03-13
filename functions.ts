function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
    console.log(msg);
}

// Function type: (parameters types) => output type
// Callback is a function that returns nothing (void)
function performJob(callback: (m: string) => void) {
    // ...
    callback("Job done!");
}

performJob(log);