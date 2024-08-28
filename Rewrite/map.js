function myMap(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

const myArr = [1, 2, 3, 4, 5];
const newArr = myMap(myArr, (item) => item * 2);
console.log(newArr);