if (indexing_error.get() > 0) {expect(() => x.set(3,1,3,1, y)).toThrow();} else {x.set(3,1,3,1, y); expect($M.isequal(x, z)).toBeTruthy();}