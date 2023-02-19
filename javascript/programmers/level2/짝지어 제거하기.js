// function solution(s) {
//   //다루기 쉽도록 문자열 배열로 변경
//   s = s.split("");
//   let answer = 1;
//   let i = 0;
//   if (s.length % 2 === 1) {
//     return 0;
//   }
//   while (true) {
//     if (s.length === 0) {
//       break;
//     } else if (i >= s.length - 1) {
//       answer = 0;
//       break;
//     }
//     if (s[i] === s[i + 1]) {
//       s.splice(i, 2);
//       i = 0;
//     } else {
//       i += 1;
//     }
//   }
//   return answer;
// }

function solution(s) {
  if (s.length % 2 !== 0) return 0;
  let stack = [s[0]];
  for (let i = 1; i < s.length; i += 1) {
    stack.push(s[i]);
    if (stack.slice(-2, -1)[0] === s[i]) {
      stack.pop();
      stack.pop();
    }
  }
  if (stack.length > 0) return 0;
  return 1;
}
console.log(solution("baabaa"));
console.log(solution("cdcd"));
