function solution(n) {
  let answer = 0;
  let arr = [];
  //삼진법 변경
  //3으로 나눈 몫이 0이 되면 반복문 탈출
  while (n != 0) {
    arr.unshift(n % 3);
    n = Math.floor(n / 3);
  }

  //배열 굳이 뒤집지 않고 바로 사용
  for (let i = 0; i < arr.length; i += 1) {
    answer += arr[i] * 3 ** i;
  }
  return answer;

  //reduce 사용해 푸는 방법
  //return arr.reduce((sum, value, i) => sum + value * Math.pow(3, i), 0);
}
console.log(solution(45));
console.log(solution(125));
