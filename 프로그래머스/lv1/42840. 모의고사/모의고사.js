function solution(answers) {
  let answer = [];
  let number = [];
  let ansCount = 0;
  let method = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  for (let i = 0; i < method.length; i += 1) {
    if (answers.length <= method[i].length) {
      method[i] = method[i].splice(0, answers.length);
      method[i].map((el, idx) => {
        el === answers[idx] ? (ansCount += 1) : (ansCount += 0);
      });
      answer.push(ansCount);
      ansCount = 0;
    } else {
      for (let j = 0; j < answers.length; j += 1) {
        method[i][j % method[i].length] === answers[j]
          ? (ansCount += 1)
          : (ansCount += 0);
      }
      answer.push(ansCount);
      ansCount = 0;
    }
  }
  answer.map((el, idx) => {
    el === Math.max(...answer) ? number.push(idx + 1) : "";
  });
  return number;
}