const quickSort = function(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let midVal = arr[mid];

  let left = arr.filter(el => {
    return el < midVal;
  });

  let right = arr.filter(el => {
    return el > midVal;
  });

  return [...quickSort(left), midVal, ...quickSort(right)];
};

console.log('------ ## TESTING QUICK SORT ##---------');

let arr1 = [1, 4, 0, 3, 7, 2];

function shuffle(arr) {
  let temp, index;
  for (let i = 0; i < arr.length; ++i) {
    index = Math.floor(Math.random() * i);
    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

console.log(quickSort(shuffle(arr1)));
console.log(quickSort(shuffle(arr1)));
console.log(quickSort(shuffle(arr1)));


