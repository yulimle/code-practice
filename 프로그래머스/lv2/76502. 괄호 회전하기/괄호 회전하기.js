function solution(s) {
  let answer = 0;

  let answerArr = [];
  for (let k = 0; k < s.length; k += 1) {
    let stack = [];
    s = s + s.slice(0, 1);
    s = s.slice(1);
    // 예외처리
    if (
      s[0] === "}" ||
      s[0] === "]" ||
      s[0] === ")" ||
      s[s.length - 1] === "{" ||
      s[s.length - 1] === "(" ||
      s[s.length - 1] === "[" ||
      s.length % 2 === 1
    ) {
      answerArr.push("X");
    } else {
      for (let i = 0; i < s.length; i += 1) {
        stack.push(s[i]);
        if (s[i] === ")" && stack[stack.length - 2] === "(") {
          stack.pop();
          stack.pop();
        }
        if (s[i] === "]" && stack[stack.length - 2] === "[") {
          stack.pop();
          stack.pop();
        }
        if (s[i] === "}" && stack[stack.length - 2] === "{") {
          stack.pop();
          stack.pop();
        }
      }
      if (stack.length === 0) answerArr.push("O");
    }
  }
  answerArr.map((el) => (el === "O" ? (answer += 1) : (answer += 0)));
  return answer;
}