function solution(i, j, k) {
  let answer = 0;
  for (let n = i; n <= j; n += 1) {
    let numArr = String(n).split("");
    numArr.map((el) => {
      el === String(k) ? (answer += 1) : (answer += 0);
    });
  }
  return answer;
}