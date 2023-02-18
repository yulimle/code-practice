function solution(left, right) {
  let answer = 0;
  //left부터 right까지 반복
  for (let i = left; i <= right; i++) {
    //   let num = 0; // num 개수 초기화
    //   for (let j = 1; j <= i; j++) {
    //     //약수의 개수
    //     if (i % j === 0) {
    //       num += 1;
    //     }
    //   }
    //   num % 2 === 0 ? (answer += i) : (answer -= i);
    // }

    //제곱근이 정수면 약수으 개수가 홀수인 것을 이용한 방식
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
console.log(solution(13, 17));
console.log(solution(24, 27));
