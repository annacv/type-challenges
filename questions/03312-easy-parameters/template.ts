type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any
// If T is a function type, then TypeScript attempts to infer S, which represents the function's parameter types.
// If T matches the pattern (...args: infer S) => any, then S is extracted.
// Otherwise, it falls back to any.
