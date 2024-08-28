function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
    return undefined;
}
const myArr = [1, 2, 3, 4, 5];
const soLonHon3 = myFind(myArr, (item) => item > 3);
console.log(soLonHon3);
