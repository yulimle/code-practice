function solution(n) {
  let answer = 0;
  //거꾸로 출발!
  while (true) {
    if (n === 0) break;
    // n이 홀수면 점프이므로 -1
    if (n % 2 !== 0) {
      n -= 1;
      answer += 1;
    }
    //n이 짝수면 순간이동 가능하므로 2 나눠줌
    n = n / 2;
  }
  return answer;
}