function duckCount() {
  // SOLUTION GOES
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  // Array#slice can be used to conver array-like objects into arrays (then we can filter them)
  return Array.prototype.slice.call(arguments).filter((obj) => {
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }).length;
}

module.exports = duckCount
