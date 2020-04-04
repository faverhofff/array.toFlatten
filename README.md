# Array.toFlatten

###Adding custom functions into Array.prototype "toFlatten"

That will flatten an array of arbitrarily nested arrays of values into a flat array . e.g. [[1,2,[3]],4,'xyz'] -> [1,2,3,4, 'xyz'].

### Installation:
```sh
npm install
```

### Run tests: 
```sh
npm test
```

### Usage:
```sh
const Array = require('../src/toFlatten.js');
let array = [[1,2,[3]],4,'xyz'];
let result = array.toFatten();
console.log(result);
```