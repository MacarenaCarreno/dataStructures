/* Excerse 1.1 Is Unique - Page 90 
Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
*/

//Solution 1
const isUnique = str => {
  let newStr = str.split('');
  let obj = newStr.reduce((allStr, str) => {
    if (str in allStr) {
      allStr[str]++;
    } else {
      allStr[str] = 1;
    }
    return allStr;
  }, {});
  return !Object.values(obj).includes(2);
};
//Test
console.log('############### TEST isUNIQUE #########################');

console.log(
  `Testing: isUnique('Hello')::`,
  isUnique('Hello'),
  ':: False is Correct'
);
console.log(
  `Testing: isUnique('House')::`,
  isUnique('House'),
  ':: True is Correct'
);
console.log('----------------------------------------------------');
//Solution 2
//The Set object lets you store unique values of any type, whether primitive values or object references.//

const isUniqueSET = str => {
  return new Set(str).size == str.length;
};

//Test
console.log('############### TEST isUniqueSET #########################');

console.log(
  `Testing: isUniqueSET('Hello')::`,
  isUniqueSET('Hello'),
  ':: False is Correct'
);
console.log(
  `Testing: isUniqueSET('House')::`,
  isUniqueSET('House'),
  ':: True is Correct'
);
console.log('----------------------------------------------------');

//Solution 3
// Hash Table
const isUniqueHT = str => {
  let newStr = str.split('');
  let obj = {};
  for (let i = 0; i < newStr.length; ++i) {
    if (newStr[i] in obj) {
      return false;
    } else {
      obj[newStr[i]] = 1;
    }
  }
  return true;
};

//Test
console.log('############### TEST isUniqueHT #########################');
console.log(
  `Testing: isUniqueHT('Hello')::`,
  isUniqueHT('Hello'),
  ':: False is Correct'
);
console.log(
  `Testing: isUniqueHT('House')::`,
  isUniqueHT('House'),
  ':: True is Correct'
);
console.log('----------------------------------------------------');

/* Big O 
  > Time complexity : O(n) ; where n is the string length
  > Space complexity : O(1) ; constant
   
*/
