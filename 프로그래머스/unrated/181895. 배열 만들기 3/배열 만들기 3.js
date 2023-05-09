function solution(arr, intervals) {
  let answer = [];
  let firstArr = [];
  let secondArr = [];
  firstArr = arr.slice(intervals[0][0], intervals[0][1] + 1);
  secondArr = arr.slice(intervals[1][0], intervals[1][1] + 1);
  answer = firstArr.concat(secondArr);
  return answer;
}