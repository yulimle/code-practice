function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i += 1) {
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
}