/*
 * Convert an object-list to dictionary by specified key as an index
 *
 * @param {Array<Object>} objectList
 * @param {string|function} indexer - Keys that each object has in common
 * @return {object}
 */
module.exports = function dictify(objectList, indexer) {
  var dict = {};

  objectList.forEach(function(obj) {
    var indexedKey;
    if (typeof indexer === 'function') {
      indexedKey = indexer(obj);
    } else {
      indexedKey = obj[indexer];
    }

    dict[indexedKey] = obj;
  });

  return dict;
}
