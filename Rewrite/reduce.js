function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  let i = initialValue === undefined ? 1 : 0;

  for (i; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

const myArr = [1, 2, 3, 4, 5];
const sum = myReduce(myArr, (acc, item) => acc + item, 0);
console.log(sum);