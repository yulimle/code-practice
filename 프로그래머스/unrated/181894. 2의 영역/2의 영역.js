function solution(arr) {
  let answerIdx = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      answerIdx.push(i);
    } else if (!arr.includes(2)) {
      return [-1];
    }
  }
  console.log(answerIdx);
  let answer = arr.slice(answerIdx[0], answerIdx[answerIdx.length - 1] + 1);
  return answer;
}