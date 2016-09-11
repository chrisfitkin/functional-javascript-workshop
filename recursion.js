function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE

  // This returns the expected result, but the array input is mo
  // var current = arr.shift();
  // var response = fn(initial, current, 0, arr);
  // return (arr.length > 1) ? reduce(arr, fn, response) : response;

  // Uses the parent function recursively
  // index = (typeof(index)!='undefined') ? ++index : 0;
  // var current = arr[index];
  // var response = fn(initial, current, index, arr);
  // return (index < arr.length - 1) ? reduce(arr, fn, response) : response;

  return (function recursive(index, value) {
    return (index < arr.length) ? recursive(index + 1, fn(value, arr[index], index, arr)) : value;
  })(0, initial); // initial call to the function
}

module.exports = reduce
