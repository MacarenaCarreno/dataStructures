var isValid = function(s) {
  let last = s.length - 1;
  if (s[0] === ')' || s[0] === '}' || s[0] === ']') return false;
  if (s[last] === '(' || s[last] === '{' || s[last] === '[') return false;

  let stack = [];
  let list = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    let top_element;
    // top_element = stack.length === 0 ? '#' : stack.pop();

    if (list[s[i]] !== undefined) {
      if (stack.length === 0) {
        top_element = '#';
      } else {
        top_element = stack.pop();
        
      }

      if (top_element !== list[s[i]]) return false;
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

console.log(isValid('()[]{}'), 'IS TRUE');
isValid('()[]{}');
console.log(isValid('(]'), 'IS FALSE');
console.log(isValid('()'), 'IS TRUE');
console.log(isValid(']{'), 'IS FALSE');
console.log(isValid('([)]'), 'IS FALSE');
