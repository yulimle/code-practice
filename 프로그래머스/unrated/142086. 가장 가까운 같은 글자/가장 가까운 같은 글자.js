function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s.slice(0, i).includes(s[i]) === false) answer.push(-1);
    else {
      answer.push(s.slice(0, i).length - s.slice(0, i).lastIndexOf(s[i]));
    }
  }
  return answer;
}