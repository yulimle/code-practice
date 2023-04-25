function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((el) => {
    obj[el] = ++obj[el] || 1;
  });
  let valueObj = Object.values(obj).sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < valueObj.length; i += 1) {
    k -= valueObj[i];
    if (k <= 0) return i + 1;
  }
}