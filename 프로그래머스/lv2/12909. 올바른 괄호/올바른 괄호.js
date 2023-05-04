function solution(s) {
  let answer = true;
  let stack = [];
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(") {
      stack.push(s.slice(i, i + 1));
    } else {
      stack.push(s.slice(i, i + 1));
      stack.pop();
      stack.pop();
    }
  }
  if (stack.length !== 0) return false;
  return answer;
}