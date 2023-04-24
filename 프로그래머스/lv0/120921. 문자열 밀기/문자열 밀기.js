function solution(A, B) {
  let answer = -1;
  if (A === B) return 0;
  for (let i = 0; i < A.length - 1; i += 1) {
    A = A.slice(-1) + A;
    A = A.slice(0, A.length - 1);
    if (A === B) return (answer = i + 1);
  }
  return answer;
}