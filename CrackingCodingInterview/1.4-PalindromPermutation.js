/* Excerse 1.4 Palindrome Permutation - Page 91 
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?
example
Input: Tact Coa
Output True - Permutations: taco cat, atco cta , etc...

*/

const Palindrome = function(str) {
  let halfRight = [];
  let halfLeft = [];
  let mid = [];

  let word = str
    .toLowerCase()
    .split('')
    .sort();

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== ' ') {
      if (halfRight.includes(word[i]) && !halfLeft.includes(word[i])) {
        halfLeft.push(word[i]);
      } else if (!halfRight.includes(word[i]) && !halfLeft.includes(word[i])) {
        halfRight.push(word[i]);
      }
    }
  }

  if (word % 2 === 0) {
    return halfRight.join() === halfLeft.join();
  } else {
    halfRight.forEach(el => {
      if (!halfLeft.includes(el)) {
        mid.push(el);
        halfRight = halfRight.filter(letter => letter !== el);
      }
    });

    if (mid.length < 2) {
      return halfRight.join() === halfLeft.join();
    }
  }
  return false;
};

console.log(Palindrome('Tact Coa'));
