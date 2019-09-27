/* Excerse 1.2 Check Permutation - Page 90 
Given two string write a method to decide if one is a permutation of the other. 
*/

const permutation = function(str1, str2) {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
 return str1 === str2;
};

console.log(permutation('zbc', 'bcz'));
