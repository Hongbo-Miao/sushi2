if (indexing_error.get() > 0) {expect(() => x.get($M.jsa2mat([4, 4, 4, 5, 3], false, 'int32'),$M.colon(1,1))).toThrow();} else {var t = x.get($M.jsa2mat([4, 4, 4, 5, 3], false, 'int32'),$M.colon(1,1)); if (typeof(t) === 'number') {t = $M.jsa2mat([[t]]);}; expect($M.isequal(t, y)).toBeTruthy();}