/**
 * Create a function that takes in two strings a two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.
 * 
 * input: String, String = two strings
 * 
 * output: Boolean(true, false).
 * 
 * What is an anagram? An anagram is another word or phrase formed by rearranging letters of the first word or phrase.
 * 
 * Do we need to consider whitespace? Trim whitespace prior to comparison
 */

function anagramCheck(str1, str2) {
  // first check if the strings are the same length
  if (str1.length !== str2.length) {
    return false;
  }

  // sort out the strings into two sorted arrays
  let sort1 = str1.split('').sort();
  console.log('sort1:', sort1);

  let sort2 = str2.split('').sort();
  console.log('sort2:', sort2);

  // return the boolean value of the comparison.
  return sort1.join('') === sort2.join('');
} // end anagramCheck

let testCase1a = 'iceman';
let testCase1b = 'cinema';

let testCase2a = 'apple';
let testCase2b = 'tiger';

let testCase3a = 'tie';
let testCase3b = 'manager';

let testCase4a = 'dog';
let testCase4b = 'god';

console.log(anagramCheck(testCase1a, testCase1b));
console.log(anagramCheck(testCase2a, testCase2b));
console.log(anagramCheck(testCase3a, testCase3b));
console.log(anagramCheck(testCase4a, testCase4b));
