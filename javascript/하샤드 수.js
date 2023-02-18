function solution(x) {
  let answer = true;
  let arr = String(x).split("");
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }

  answer = x % sum ? false : true;
  return answer;
}
console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));
