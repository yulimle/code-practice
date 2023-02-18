//"주어진 자연수를 연속되는 자연수들의 합으로
//표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서
// 홀수인 수의 개수와 같다." 는 방법으로도 풀 수 있다고 함
function solution(n) {
  let answer = 0;
  let startNum = 1;
  while (startNum <= n) {
    let sum = 0;
    let j = startNum;
    while (sum <= n) {
      if (sum === n) {
        answer += 1;
      }
      sum += j;
      j += 1;
    }
    startNum += 1;
  }
  return answer;
}

console.log(solution(15));
