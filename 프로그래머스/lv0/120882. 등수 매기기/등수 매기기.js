function solution(score) {
  // 평균 점수 구하기
  let avg = score.map((el) => (el[0] + el[1]) / 2);
  // 얕은 복사로 정렬해서 복사
  let sorted = avg.slice().sort((a, b) => b - a);
  // 평균 점수 구한 배열에 얕은 복사로 복사해 정렬한 배열의 인덱스에서 값을 찾아 1을 더함
  return avg.map((el) => sorted.indexOf(el) + 1);
}