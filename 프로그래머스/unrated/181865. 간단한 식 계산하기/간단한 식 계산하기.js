function solution(binomial) {
  let answer = 0;
  binomial = binomial.split(" ");
  console.log(binomial);
  if (binomial[1] === "+") {
    answer = Number(binomial[0]) + Number(binomial[2]);
  } else if (binomial[1] === "*") {
    answer = Number(binomial[0]) * Number(binomial[2]);
  } else if (binomial[1] === "-") {
    answer = Number(binomial[0]) - Number(binomial[2]);
  }
  return answer;
}