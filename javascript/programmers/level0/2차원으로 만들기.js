function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i += 1) {
    answer.push(num_list.slice(i * n, i * n + n));
  }
  return answer.slice(0, num_list.length / n);
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
