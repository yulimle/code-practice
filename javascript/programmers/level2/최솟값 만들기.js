function solution(A, B) {
  // let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  // for (let i = 0; i < A.length; i += 1) {
  //   answer += A[i] * B[i];
  // }
  // return answer;

  //reduce 사용
  return A.reduce((sum, value, i) => sum + value * B[i], 0);
}
console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
