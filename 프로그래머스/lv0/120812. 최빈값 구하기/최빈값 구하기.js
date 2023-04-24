function solution(array) {
  let newArr = [];
  if (array.length === 1) return array[0];
  array = array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i += 1) {
    newArr[i] = array.filter((el) => array[i] === el);
  }
  newArr = newArr.sort((a, b) => b.length - a.length);

  let count = 0;
  for (let j = 0; j < newArr.length; j += 1) {
    if (newArr[j].length === newArr[0].length) {
      count += 1;
    }
  }
  if (newArr[0].length === count) return newArr[0][0];
  else return -1;
}
