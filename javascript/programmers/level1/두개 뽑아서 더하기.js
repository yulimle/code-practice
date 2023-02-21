// function solution(numbers) {
//   let answer = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     for (let j = i + 1; j < numbers.length; j += 1) {
//       answer.push(numbers[i] + numbers[j]);
//     }
//   }
//   answer = answer.sort((a, b) => a - b);
//중복제거
//   for (let k = 0; k < answer.length - 1; k += 1) {
//     if (answer[k] == answer[k + 1]) {
//       answer.splice(k, 1);
//       k -= 1;
//     }
//   }
//   return answer;
// }

function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  //Set을 사용해서 배열에서 중복된 요소 제거
  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
