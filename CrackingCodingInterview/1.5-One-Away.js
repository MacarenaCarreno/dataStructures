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
  if (str.length === str1.length) {
    console.log('remplace function');
    return oneEditRemplace(str, str1);
  } else if (str.length + 1 === str1.length) {
    console.log('remove character ');
    return oneEditInRe(str, str1);
  } else if (str.length - 1 === str1.length) {
    console.log('insert character');
    return oneEditInRe(str1, str);
  }
  return false;
};

function oneEditRemplace(s1, s2) {
  let diff = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (diff) {
        return false;
      }
      diff = true;
    }
  }
  return true;
}

function oneEditInRe(s1, s2) {
  let idx1 = 0;
  let idx2 = 0;
  while (idx2 < s2.length && idx1 < s1.length) {
    if (s1[idx1] !== s2[idx2]) {
      if (idx1 !== idx2) {
        return false;
      }
      idx2++;
    } else {
      idx1++;
      idx2++;
    }
  }
  return true;
}
console.log(OneAway('pale', 'ple'));
console.log(OneAway('pale', 'pales'));
console.log(OneAway('pale', 'bale'));
console.log(OneAway('pale', 'bake'));
console.log(OneAway('horse', 'rse'));

// P>a>l>e
// p>  >l>e

//
// "horse"
// "ros"
