function solution(seoul) {
  let index = seoul.findIndex((item) => /^Kim/.test(item));
  return `김서방은 ${index}에 있다`;
}
console.log(solution(["Jane", "Kim"]));
