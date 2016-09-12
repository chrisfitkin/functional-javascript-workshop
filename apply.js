var slice = Array.prototype.slice

function logger(namespace) {
  // SOLUTION GOES HERE
  return function () {
    // too many lines???
    // var resp = slice.call(arguments);
    // resp.unshift(namespace);
    // console.log.apply(null, resp);

    // 1 line (cooler?)
    console.log.apply(null, [namespace].concat(slice.call(arguments)));
  }
}

module.exports = logger
