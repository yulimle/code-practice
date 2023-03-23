function solution(numer1, denom1, numer2, denom2) {
  let num = 0;
  let lcm = Math.max(denom1, denom2);
  let gcd = 0;

  while (true) {
    if (lcm % denom1 === 0 && lcm % denom2 === 0) break;
    else {
      lcm += 1;
    }
  }
  num = (lcm / denom1) * numer1 + (lcm / denom2) * numer2;
  for (let i = 1; i <= Math.min(num, lcm); i++) {
    if (num % i === 0 && lcm % i === 0) {
      gcd = i;
    }
  }
  return [num / gcd, lcm / gcd];
}

console.log(solution(1, 2, 3, 4));
console.log(solution(9, 2, 1, 3));
