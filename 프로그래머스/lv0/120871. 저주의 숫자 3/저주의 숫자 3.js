function solution(n) {
  let answer = 1;
  for (let i = 0; i < n; i += 1) {
    // if (i % 3 === 0 || String(i).includes("3")) {
    //   answer += 1;
    while (1) {
      if (answer % 3 === 0 || String(answer).includes("3")) {
        answer += 1;
      } else {
        break;
      }
    }
    // }
    answer += 1;
    // if (
    //   i % 3 === 0 ||
    //   String(i).includes("3") ||
    //   answer === i ||
    //   answer % 3 === 0 ||
    //   String(answer).includes("3")
    // ) {
    //   answer += 1;
    // }
    // answer += 1;
  }
  return answer - 1;
}