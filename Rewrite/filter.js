function myFilter(arr, callback) {
  const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const myArr = [1, 2, 3, 4, 5];
const soLonHon2 = myFilter(myArr, (item) => item > 2);
console.log(soLonHon2); 
