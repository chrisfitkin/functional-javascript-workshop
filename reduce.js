function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((previous, current, index, array) => {
    // previous[current] = (Number.isInteger(previous[current])) ? ++previous[current] : 1;
    previous[current] = ++previous[current] || 1;
    return previous;
  }, {});
}

module.exports = countWords
