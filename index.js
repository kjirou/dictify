/*
 * Convert an object-list to dictionary by specified key as an index
 *
 * @param {Array<Object>} objectList
 * @param {string} indexerKey - Keys that each object has in common
 * @return {object}
 */
module.exports = function dictify(objectList, indexerKey) {
  var dict = {};
  objectList.forEach(function(obj) {
    dict[obj[indexerKey]] = obj;
  });
  return dict;
}
