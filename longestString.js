/* 
 * Write a function that accepts an array of strings. Return the longest string.
 *
 * Input: String[] = an array of strings
 *
 * Output: String = the longest string in the array
 *
 * Do we need to consider if there are no strings in the array? No
 * 
 * Do we need to consider times when the strings are the same length? Yes, Return the first string
 */

function findLongestString(stringsArray) {
  // initialize the variable to hold the longest string
  let longestString = '';

  // loop through the array of strings
  for (string of stringsArray) {

    // check if the length of the current string in the array is longer than the string of the longestString variable
    if (string.length > longestString.length) {

      // if it is longer, set the value of the longest string to the new string that passed the check
      longestString = string;
    }
  } // end for

  // return the longest string
  return longestString;
} // end longestString 

let testCase1 = ['a', 'abc', 'ijf', 'e1', '124ke', '2'];
let testCase2 = ['2314', '2ijfne', 'diej', 'waefuwi8723', 'aoeijfi'];
let testCase3 = ['1a', 'dw', 'wa', '12'];

console.log('testCase1:', findLongestString(testCase1));
console.log('testCase2:', findLongestString(testCase2));
console.log('testCase3:', findLongestString(testCase3));