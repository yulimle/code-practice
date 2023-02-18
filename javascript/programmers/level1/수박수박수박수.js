function solution(n) {
  let answer = "수박".repeat(n);
  return answer.slice(0, n);
}

console.log(solution(3));
console.log(solution(4));
