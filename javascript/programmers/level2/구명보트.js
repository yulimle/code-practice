// function solution(people, limit) {
//   let answer = 0;
//   people.sort((a, b) => b - a);
//   while (people.length >= 2) {
//     if (people[0] + people[people.length - 1] > limit) {
//       people.shift();
//       answer += 1;
//     } else {
//       people.shift();
//       people.pop();
//       answer += 1;
//     }
//   }
//   if (people.length === 1) {
//     answer += 1;
//   }
//   return answer;
// }

function solution(people, limit) {
  let answer = 0;
  people = people.sort((a, b) => b - a);

  for (let i = 0, j = people.length - 1; i <= j; i++, answer++)
    if (people[i] + people[j] <= limit) j--;

  return answer;
}
console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));
