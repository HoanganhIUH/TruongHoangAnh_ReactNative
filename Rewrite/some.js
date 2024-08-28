function mySome(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
}
const myArr = [1, 2, 3, 4, 5];
const soLonHon3 = mySome.call(myArr, (item) => item > 3);
console.log(soLonHon3);