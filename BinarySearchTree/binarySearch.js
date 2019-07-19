const binarySearch = (arr, num) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let guess = arr[mid];
    if (guess === num) return mid;
    if (num < guess) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return -1;
};
console.log(binarySearch([1, 3, 5, 7, 8, 10], 7));
console.log(binarySearch([1, 3, 5, 7, 8, 10], 10));
console.log(binarySearch([1, 3, 5, 7, 8, 10], 27));
