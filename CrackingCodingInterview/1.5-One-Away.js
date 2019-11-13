/* Excerse 1.5 One Away- Page 91 
There are three types of edits that can be performed on strings:
  - Insert a Character
  - Remove a Characeter
  - Replace a Character

Given two strings, write a funciton to check if they are one edit (or zer edits) away.

Example:
   pale, ple    -> True   (Remove)
   pale, pales  -> True   (insert)
   pale, bale   -> True   (replace)
   pale, bake   -> False  (nada)
*/

const OneAway = (str, str1) => {
  console.log(str, str1);
  let count = 0;
  let mid = Math.floor(str.length/2)
  console.log(str[mid])
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str1[i]) {
      count++;
    }
  }
  console.log(count);
};

console.log(OneAway('pale', 'ple'));
console.log(OneAway('pale', 'pales'));

// P>a>l>e
// p>  >l>e
