/*  The Problem:
Find lucky is a common interview problem. Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
The object is to return a lucky integer in the array. If there are multiple lucky integers return the largest of them, else return -1.
Constraints:

1 <= arr.length <= 500
1 <= arr[i] <= 500
*/

//Solution:

/**
 * @param {number[]} arr
 * @return {number}
 */

const findLucky = function (arr) {
  let result = -1
  const map = arr.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1
    return acc
  }, {})

  for (const key of Object.keys(map)) {
    if (Number(key) === map[key]) {
      result = Math.max(Number(key), result)
    }
  }
  return result
}