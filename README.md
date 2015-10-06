# dictify

Convert an object-list to dictionary by specified key as an index


## Installation

```bash
npm install --save dictify
```


## Example

```js
var assert = require('assert');
var dictify = require('../index');

var objectList = [
  { x: 'foo' },
  { x: 'bar' },
  { x: 'baz' },
];
var dict = dictify(objectList, 'x');

assert.deepEqual(
  dict,
  {
    foo: { x: 'foo' },
    bar: { x: 'bar' },
    baz: { x: 'baz' },
  }
);
```
