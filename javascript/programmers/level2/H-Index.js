function solution(citations) {
  let answer = 0;
  let total = 0;
  citations.sort((a, b) => a - b);
  while (true) {
    for (let i = 0; i < citations.length; i++) {
      if (answer < citations[i]) {
        total += 1;
      }
    }
    if (answer >= total) break;
    answer += 1;
    total = 0;
  }
  return answer;
}

console.log(solution([25, 8, 5, 3, 3]));
console.log(solution([3, 0, 6, 1, 5]));
