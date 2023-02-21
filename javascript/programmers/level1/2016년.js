function solution(a, b) {
  arrMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  arrDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  sumDay = 0;
  let answer = "";
  for (let i = 0; i < a - 1; i += 1) {
    sumDay += arrMonth[i];
  }
  sumDay += b;
  answer = arrDay[(sumDay + 4) % 7];

  return answer;
}
console.log(solution(5, 24));
