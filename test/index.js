var assert = require('assert');

var dictify = require('../index');


describe('dictify', function() {

  it('should be', function() {
    assert.deepEqual(
      dictify(
        [
          { x: 'foo' },
          { x: 'bar' },
          { x: 'baz' },
        ],
        'x'
      ),
      {
        foo: { x: 'foo' },
        bar: { x: 'bar' },
        baz: { x: 'baz' },
      }
    )
  });
});
