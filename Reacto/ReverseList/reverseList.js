// # Method 1 # //
// With a for loop

const reverseForLoop = function(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

console.log('REVERSED FOR LOOP', reverseForLoop([1, 2, 3, 4, 5, 6]));

// # Method 2 # //
// With a Reverse Method

const reverseWithReverse = arr => {
  return arr.reverse();
};

console.log('USING REVERSING ', reverseWithReverse([1, 2, 3, 4, 5, 6]));

// # Method 3 # //
// Reverse in the Array

function ReverseinPlace(arr) {
  let len = Math.floor(arr.length / 2);
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = el;
  }
  return arr;
}

console.log(
  'REVERSE IN PLACE ',
  ReverseinPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
