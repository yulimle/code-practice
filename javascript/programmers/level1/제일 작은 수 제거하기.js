function solution(arr) {
  let remArr = arr.filter((num) => num !== Math.min(...arr));
  return remArr.length === 0 ? [-1] : remArr;
}
console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
