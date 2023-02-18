function solution(arr, divisor) {
  // const answer = [];
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i] % divisor === 0) {
  //     answer.push(arr[i]);
  //   }
  // }
  // if (answer.length === 0) answer.push(-1);
  // return answer.sort((a, b) => a - b);

  //filter 함수 사용
  const divarr = arr.filter(function (num) {
    return num % divisor === 0;
  });
  return divarr.length === 0 ? [-1] : divarr.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
