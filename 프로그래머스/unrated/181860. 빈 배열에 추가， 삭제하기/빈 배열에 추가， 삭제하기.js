function solution(arr, flag) {
  let answer = [];

  for (let i = 0; i < flag.length; i += 1) {
    if (flag[i] === true) {
      let count = 0;
      while (count < arr[i] * 2) {
        answer.push(arr[i]);
        count += 1;
      }
    } else {
      answer.splice(answer.length - arr[i], answer.length);
    }
  }
  return answer;
}