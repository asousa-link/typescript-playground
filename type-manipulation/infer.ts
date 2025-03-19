function add(a: number, b: number) {
    return a+b;
}

type AddFn = typeof add;
// I want to extract the return type R using infer
type ReturnValueType<T> = T extends (...args: any[]) => infer R ? R : never;

type AddFnReturnValueType = ReturnValueType<AddFn>;

// It is also built-in into TS
type BuiltInReturnType = ReturnType<AddFn>;