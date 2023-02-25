function solution(t, p) {
  let pe = p.length - 1;
  let d = [];
  let count = 0;
  for (let i = 0; i < t.length - pe; i++) {
    if (parseInt(t.substring(i, pe + i + 1)) <= parseInt(p)) {
      count++;
    }
  }
  return count;
}
console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));
