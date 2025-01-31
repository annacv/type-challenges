type First<T extends unknown[]> = T extends never[] ? never : T[0]
