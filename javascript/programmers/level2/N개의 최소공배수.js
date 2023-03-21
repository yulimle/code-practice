function solution(arr) {
  let answer = arr[0];
  for (let i = 0; i < arr.length - 1; i += 1) {
    answer = lcm(answer, arr[i + 1]);
  }
  return answer;
}

function lcm(n, m) {
  let lcm = Math.max(m, n);
  while (true) {
    if (lcm % m === 0 && lcm % n === 0) break;
    else {
      lcm += 1;
    }
  }
  return lcm;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
