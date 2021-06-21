/**
 * Write a function that takes a string, and returns the character that is most commonly used in the string.
 * 
 * Input: String = one String
 * 
 * Output: String = the single character that shows up the most in the given string
 * 
 * Do we need to consider if there is no string given? No
 * 
 * Do we need ot consider times when more than one character show up the same number of times? No, return the last one
 */

function mostCommonChar(string){
  // initialize an object to map out our character counts
  const characterCount = {};
  // initialize a variable to store the max number for character count
  let maxCharacterCount = 0;
  // initialize a variable to store the character that has the max number 
  let maxChar = '';

  // map out the character count for the string
  for(let i = 0; i < string.length; i++) {
    characterCount[string[i]] = ++characterCount[string[i]] || 1;
  }

  // loop through the object we've created with the mapped out strings
  for(let key in characterCount) {
    // check the character count in that particular key against the current maxCharacterCount
    if(characterCount[key] >= maxCharacterCount) {
      maxCharacterCount = characterCount[key];
      maxChar = key;
    }
  }

  return maxChar;
} 

let testCase1 = 'elephant';

let testCase2 = 'apple';

let testCase3 = 'california'

console.log(mostCommonChar(testCase1));
console.log(mostCommonChar(testCase2));
console.log(mostCommonChar(testCase3));