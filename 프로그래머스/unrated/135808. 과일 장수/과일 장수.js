function solution(k, m, score) {
  let arr = [];
  let minScore = 0;
  let answer = 0;
  score = score.sort((a, b) => b - a);
  let count = score.length - (score.length % m);
  score = score.slice(0, count);
  for (let i = 0; i < score.length; i += m) {
    arr.push(score.slice(i, i + m));
  }
  for (let j = 0; j < arr.length; j += 1) {
    for (let n = 0; n < arr[j].length; n += 1) {
      minScore = Math.min(k, arr[j][n]);
    }
    answer += minScore * m;
  }
  return answer;
}