// function solution(n) {
//   const dp = new Array(n + 1).fill(0);

//   dp[0] = 1;
//   dp[1] = 1;
//   for (let i = 2; i < n + 1; i++) {
//     dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
//   }
//   return dp[n];
// }

// console.log(solution(4));
// console.log(solution(5));

const dp = new Array(5).fill(0);
console.log(dp);
