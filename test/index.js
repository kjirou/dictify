var assert = require('assert');

var dictify = require('../index');


describe('dictify', function() {

  it('should be', function() {
    assert.deepEqual(
      dictify(
        [
          { x: 'foo' },
          { x: 'bar' },
          { x: 'baz' }
        ],
        'x'
      ),
      {
        foo: { x: 'foo' },
        bar: { x: 'bar' },
        baz: { x: 'baz' }
      }
    );
  });

  it('should specify indexer by function', function() {
    assert.deepEqual(
      dictify(
        [
          { x: 'foo' },
          { x: 'bar' },
          { x: 'baz' }
        ],
        function (obj) {
          return obj.x.toUpperCase();
        }
      ),
      {
        FOO: { x: 'foo' },
        BAR: { x: 'bar' },
        BAZ: { x: 'baz' }
      }
    );
  });
});
