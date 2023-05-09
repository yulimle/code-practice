function solution(n_str) {
  let answer = "";
  while (n_str[0] === "0") {
    n_str = n_str.slice(1, n_str.length);
  }

  return n_str;
}