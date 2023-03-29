function solution(n, arr1, arr2) {
  const result = [];

  for (let i = 0; i < n; i++) {
    let num = (arr1[i] | arr2[i]).toString(2);
    num = num.replace(/1/g, "#").replace(/0/g, " ");
    result.push(num.padStart(n, " "));
  }

  return result;
}