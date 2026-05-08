/**
 * Write a function `filterWords` that accepts a sentence as a string and a minimum length,
 * and returns an array of only the words longer than that minimum:
* */

function filterWords (sentence, minLength) {
  return sentence.split(' ').filter((word) => word.length > minLength)
}

/**
 * Write a function summarize that accepts an array of numbers and returns an object like this:
 * ```
 * summarize([1, 2, 3, 4, 5])
 * // {
 * //   total: 5,
 * //   sum: 15,
 * //   average: 3,
 * //   highest: 5,
 * //   lowest: 1
 * //
 * ```
* */
function summarize (arrayOfNumbers) {
  const total = arrayOfNumbers.length
  const sum = arrayOfNumbers.reduce((acc, currentValue) => acc + currentValue, 0)

  return {
    total,
    sum,
    average: total / sum,
    highest: Math.max(...arrayOfNumbers),
    lowest: Math.min(...arrayOfNumbers)
  }
}