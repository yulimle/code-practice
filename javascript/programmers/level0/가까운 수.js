function solution(array, n) {
  array.sort((a, b) => a - b);
  let answer = 0;
  let arr = [];
  for (let i = 0; i < array.length; i += 1) {
    arr.push(Math.abs(array[i] - n));
  }
  for (let j = 0; j < arr.length; j += 1) {
    if (arr[j] === Math.min(...arr)) {
      answer = array[j];
      break;
    }
  }

  return answer;
}
console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
