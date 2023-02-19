//시간초과
// function solution(n) {
//   return fibo(n) % 1234567;
// }
// function fibo(num) {
//   if (num < 2) {
//     return num;
//   }
//   return fibo(num - 2) + fibo(num - 1);
// }

//2번째 풀이
//오버플로우가 나지 않도록 %1234567을 연산마다 해줌
function solution(n) {
  const arr = [0, 1];
  for (i = 2; i <= n; i++) {
    arr.push((arr[i - 2] % 1234567) + (arr[i - 1] % 1234567));
  }
  return arr[n] % 1234567;
}

console.log(solution(3));
console.log(solution(5));
