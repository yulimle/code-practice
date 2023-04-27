function solution(k, m, score) {
  let arr = [];
  let minScore = 0;
  let answer = 0;

  // 사과 점수 내림차순으로 정렬
  score = score.sort((a, b) => b - a);

  // 일정 개수만큼 상자에 담고 남은 것은 버리기 위해
  let count = score.length - (score.length % m);
  score = score.slice(0, count);

  // 개수마다 최소 점수를 구해서 가격을 정해야 하기 때문에 새로운 배열에 넣어줌
  for (let i = 0; i < score.length; i += m) {
    arr.push(score.slice(i, i + m));
  }

  // 최소값 구해서 더하기
  for (let j = 0; j < arr.length; j += 1) {
    for (let n = 0; n < arr[j].length; n += 1) {
      minScore = Math.min(k, arr[j][n]);
    }
    answer += minScore * m;
  }
  return answer;
}