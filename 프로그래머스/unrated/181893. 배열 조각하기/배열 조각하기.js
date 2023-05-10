function solution(arr, query) {
  let answer = [];
  for (let i = 0; i < query.length; i += 1) {
    if (i % 2 === 0) {
      arr = arr.slice(0, query[i] + 1);
    } else {
      arr = arr.slice(query[i], arr.length);
    }
  }
  return arr;
}