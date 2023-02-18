function solution(n) {
  let answer = 0;
  let sum = 0;
  let i = 1;
  while (sum <= n) {
    sum += i;
    i += 1;
    answer += 1;
  }
  return answer;
}

console.log(solution(15));
