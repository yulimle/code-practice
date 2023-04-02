function solution(t, p) {
  let answer = 0;
  let partArr = [];
  for (let i = 0; i < t.length - p.length + 1; i += 1) {
    partArr.push(t.slice(i, i + parseInt(p.length)));
  }

  partArr.map((el) => {
    if (parseInt(el) <= parseInt(p)) {
      answer += 1;
    }
  });
  return answer;
}