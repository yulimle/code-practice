function solution(number) {
  let answer = 0;
  let sum = 0;
  let mid = 0;
  for (let i = 0; i < number.length - 2; i += 1) {
    mid = number[i] + number[i + 1];
    for (let j = i + 2; j < number.length; j += 1) {
      sum = mid + number[j];
      if (sum === 0) {
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
