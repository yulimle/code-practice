// function solution(n, arr1, arr2) {
//   let answer = [];

//   for (let i = 0; i < n; i++) {
//     // toString(2)은 이진수로 반환하는 것.
//     const bin = (arr1[i] | arr2[i]).toString(2);
//     // console.log(bin);
//     let line = [];
//     for (let j = bin.length - n; j < bin.length; j++) {
//       // j가(인덱스값)이 -1일 경우 undefined 반환.
//       if (bin[j] === "1") {
//         // 1이면 '#', 그 외 ' '
//         line.push("#");
//       } else {
//         line.push(" ");
//       }
//     }
//     answer.push(line.join(""));
//   }
//   return answer;
// }

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
