/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  const smallestIndex = arr.indexOf(Math.min(...arr).toString());
  arr.splice(smallestIndex, 1);
  arr = arr.join('');
  return Number(arr);
}

module.exports = deleteDigit;
