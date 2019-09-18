function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return helperMerge(mergeSort(left), mergeSort(right));
}

function helperMerge(left, right) {
  let result = [];
  let left_idx = 0;
  let right_idx = 0;

  while (left_idx < left.length && right_idx < right.length) {
    if (left[left_idx] < right[right_idx]) {
      result.push(left[left_idx]);
      left_idx++;
    } else {
      result.push(right[right_idx]);
      right_idx++;
    }
  }
  return result.concat(left.slice(left_idx)).concat(right.slice(right_idx));
}



console.log('------ ## TESTING MERGE SORT ##---------');

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

console.log(mergeSort(shuffle(arr1)));
console.log(mergeSort(shuffle(arr1)));
console.log(mergeSort(shuffle(arr1)));
