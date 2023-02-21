function solution(strings, n) {
  let answer = [];
  let order = [];
  for (let i = 0; i < strings.length; i += 1) {
    order.push(strings[i][n]);
    order.sort();
  }

  return order;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
