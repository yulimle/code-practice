function solution(a, b, n) {
  let answer = 0;
  while (true) {
    answer += Math.floor(n / a) * b;
    if (Math.floor(n / a) * b < b) {
      answer += Math.floor(n / a);
      break;
    }
    n = Math.floor(n / a) * b + (n % a);
  }
  return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
