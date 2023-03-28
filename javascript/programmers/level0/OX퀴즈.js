function solution(quiz) {
  let answer = [];

  for (let j = 0; j < quiz.length; j += 1) {
    let quizNew = quiz[j].split(" ");
    let cal = 0;
    for (let i = 0; i < quizNew.length; i += 1) {
      if (quizNew[i] === "+") {
        cal += parseInt(quizNew[i - 1]) + parseInt(quizNew[i + 1]);
      }
      if (quizNew[i] === "-") {
        cal += parseInt(quizNew[i - 1]) - parseInt(quizNew[i + 1]);
      }
      if (quizNew[i] === "=") break;
    }
    if (cal === parseInt(quizNew[quizNew.length - 1])) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }
  return answer;
}
console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
