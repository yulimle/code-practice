function solution(my_str, n) {
  let answer = [];
  my_str = my_str.split("");
  while (my_str.length > 0) {
    answer.push(my_str.splice(0, n).join(""));
  }
  return answer;
}
console.log(solution("abc1Addfggg4556b", 6));
console.log(solution("abcdef123", 3));
