function solution(my_string) {
  let num = [];
  let operator = ["+"];
  let answer = 0;
  my_string = my_string.split(" ");

  // 숫자와 연산자를 각각 다른 배열에 담아줌
  for (let i = 0; i < my_string.length; i += 1) {
    if (i % 2 === 0) {
      num.push(parseInt(my_string[i]));
    } else {
      operator.push(my_string[i]);
    }
  }
  // 계산
  for (let j = 0; j < num.length; j += 1) {
    if (operator[j] === "+") {
      answer += num[j];
    } else {
      answer -= num[j];
    }
  }
  return answer;
}
console.log(solution("3 + 4"));
