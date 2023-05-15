function solution(s) {
  let answer = "";
  let count = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i += 1) {
    s.map((el) => {
      el === s[i] ? (count += 1) : (count += 0);
    });
    count === 1 ? (answer += s[i]) : answer;
    count = 0;
  }
  return answer.split("").sort().join("");
}