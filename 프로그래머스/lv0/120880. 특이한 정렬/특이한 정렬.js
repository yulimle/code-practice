function solution(numlist, n) {
  let answer = [];
  answer = numlist.map((el) => el - n);
  // 먼저 오름차순으로 정렬하고,
  answer.sort((a, b) => b - a);
  // 절대값 오름차순으로 정렬
  answer.sort((a, b) => {
    return Math.abs(a) - Math.abs(b);
  });
  // 원래대로 되돌려줌
  answer = answer.map((el) => el + n);
  return answer;
}