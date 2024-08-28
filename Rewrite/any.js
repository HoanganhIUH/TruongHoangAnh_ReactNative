function any(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

const myArr = [1, 2, 3, 4, 5];
const soLonHon3 = any(myArr, (item) => item > 3);
console.log(soLonHon3); 