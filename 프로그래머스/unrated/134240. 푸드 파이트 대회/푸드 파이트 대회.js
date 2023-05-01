function solution(food) {
  let answer = "";
  let reverseAns = "";
  for (let i = 1; i < food.length; i += 1) {
    for (let j = 0; j < Math.floor(food[i] / 2); j += 1) {
      answer += String(i);
    }
  }

  reverseAns = answer.split("").reverse().join("");
  return answer + "0" + reverseAns;
}