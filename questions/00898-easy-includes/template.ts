type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends // Function returning 1 or 2 based on X
  (<T>() => T extends Y ? 1 : 2) ? true : false // Function returning 1 or 2 based on Y

type Includes<T extends readonly unknown[], U> =
  T['length'] extends 0 ? false : // recursion terminal case
    T extends [infer First, ...infer Rest] ? // recursion decomposition
      Equal<First, U> extends true ? // recursive test
        true : Includes<Rest, U> : false // actual recursion
