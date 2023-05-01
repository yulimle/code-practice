function solution(n) {
  let answer = 0;
  let answer2 = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 2 === 0) {
      answer += i * i;
    } else {
      answer2 += i;
    }
  }

  return n % 2 === 0 ? answer : answer2;
}