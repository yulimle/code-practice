function solution(arr) {
  let answer = 0;
  answer = arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  return answer / arr.length;
}

console.log(solution([1, 2, 3, 4]));
