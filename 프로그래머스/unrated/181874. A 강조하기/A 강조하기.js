function solution(myString) {
  let answer = "";
  for (let i = 0; i < myString.length; i += 1) {
    if (myString[i] === "a" || myString[i] === "A") {
      answer += "A";
    } else {
      answer += myString[i].toLowerCase();
    }
  }
  return answer;
}