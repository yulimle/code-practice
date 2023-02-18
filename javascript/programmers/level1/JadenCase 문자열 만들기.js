function solution(s) {
  let answer = "";
  // let arr = s.split("");
  // let num = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (num === 0) {
  //     arr[i] = arr[i].toUpperCase();
  //     num += 1;
  //   } else {
  //     arr[i] = arr[i].toLowerCase();
  //     num += 1;
  //   }
  //   if (arr[i] === " ") {
  //     num = 0;
  //   }
  // }
  // return arr.join("");

  //다른 사람 풀이
  for (let i = 0; i < s.length; i++) {
    if (i === 0 || s[i - 1] === " ") {
      //맨 처음이거나 앞에 띄어쓰기(공백)이 있을 때
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
  }
  return answer;
}
console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
