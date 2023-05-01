function solution(name, yearning, photo) {
  let answer = [];
  let score = 0;
  photo.map((el) => {
    for (let i = 0; i < name.length; i += 1) {
      el.includes(name[i]) ? (score += yearning[i]) : (score += 0);
    }
    answer.push(score);
    score = 0;
  });
  return answer;
}