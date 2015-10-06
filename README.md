# dictify

[![npm version](https://badge.fury.io/js/dictify.svg)](http://badge.fury.io/js/dictify)
[![Build Status](https://travis-ci.org/kjirou/dictify.svg?branch=master)](https://travis-ci.org/kjirou/dictify)

Convert an object-list to dictionary by specified key as an index


## Installation

```bash
npm install --save dictify
```


## Example

```js
var assert = require('assert');
var dictify = require('dictify');

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
