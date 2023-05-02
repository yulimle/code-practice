function solution(s1, s2) {
  let answer = 0;
  for (let i = 0; i < s1.length; i += 1) {
    if (s2.includes(s1[i])) answer += 1;
  }
  return answer;
}