if (indexing_error.get() > 0) {expect(() => x.set(1,9, y)).toThrow();} else {x.set(1,9, y); expect($M.isequal(x, z)).toBeTruthy();}