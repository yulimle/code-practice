function solution(l, r) {
  let answer = [];
  let numToStr = "";
  for (let i = l; i <= r; i += 1) {
    numToStr = i.toString();
    for (let j = 0; j < numToStr.length; j += 1) {
      if (numToStr[j] !== "5" && numToStr[j] !== "0") {
        numToStr = "x";
      }
    }
    if (numToStr !== "x") {
      answer.push(Number(numToStr));
    }
  }

  return answer.length === 0 ? [-1] : answer;
}