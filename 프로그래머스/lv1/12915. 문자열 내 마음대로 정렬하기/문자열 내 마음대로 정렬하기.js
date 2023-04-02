function solution(strings, n) {
  for (let i = 0; i < strings.length; i += 1) {
    strings[i] = strings[i][n] + strings[i];
  }
  strings.sort();
  const answer = strings.map((el) => {
    return el.substr(1, el.length);
  });

  return answer;
}
