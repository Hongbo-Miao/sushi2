if (indexing_error.get() > 0) {expect(() => x.set(2,2, y)).toThrow();} else {x.set(2,2, y); expect($M.isequal(x, z)).toBeTruthy();}