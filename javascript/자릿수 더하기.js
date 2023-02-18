function solution(n) {
  let answer = 0;
  let nlegnth = String(n).length;
  for (let i = 0; i < nlegnth; i += 1) {
    answer += n % 10;
    n = parseInt(n / 10);
  }
  return answer;
}

console.log(solution(123));
console.log(solution(987));
