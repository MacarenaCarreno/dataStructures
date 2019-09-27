/* Excerse 1.3 Url Lify - Page 90 
Write a method to replace all the all spaces in a string with '%20%'. you may assume
that the string has sufficent space at the end to hold the additional characters, and that 
you are given the 'true' length of the string

example:
input: 'Mr John Smith       ', 13
Output: 'Mr%20John%20Smith'
*/

const urlLify = function(url, len) {
  let response = url.split(' ');

  while (len > 0) {
    if (response[len - 1] === '') {
      response.pop();
      len--;
    } else len = 0;
  }

  return response.join('%20');
};

console.log(urlLify('Mr John Smith      ', 13));
