var slice = Array.prototype.slice

module.exports = function (namespace) {
  // return function() {
    // console.log.bind([namespace].concat(slice.call(arguments)));
    return console.log.bind(null, namespace)
  // }
}
