function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i += 1) {
    if (yellow % i !== 0) continue;

    if ((i + 2) * (Math.floor(yellow / i) + 2) === brown + yellow)
      return [Math.floor(yellow / i) + 2, i + 2];
  }
}