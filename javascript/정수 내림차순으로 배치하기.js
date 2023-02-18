function solution(n) {
  let answer = n.toString().split("").sort().reverse().join("");
  return parseInt(answer, 10);
}
console.log(solution(118372));
