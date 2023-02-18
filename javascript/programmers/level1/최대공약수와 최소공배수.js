function solution(n, m) {
  let gcd = 0;
  let lcm = Math.max(m, n);
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }
  while (true) {
    if (lcm % m === 0 && lcm % n === 0) break;
    else {
      lcm += 1;
    }
  }
  return [gcd, lcm];
}

console.log(solution(3, 12));
console.log(solution(2, 5));
