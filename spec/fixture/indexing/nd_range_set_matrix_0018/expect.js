if (indexing_error.get() > 0) {expect(() => x.set($M.jsa2mat([1, 1, 3, 3, 4], false, 'int32'),$M.colon($M.end-1,$M.end+0),$M.jsa2mat([1, 1, 1, 1, 1], false, 'int32'), y)).toThrow();} else {x.set($M.jsa2mat([1, 1, 3, 3, 4], false, 'int32'),$M.colon($M.end-1,$M.end+0),$M.jsa2mat([1, 1, 1, 1, 1], false, 'int32'), y); expect($M.isequal(x, z)).toBeTruthy();}