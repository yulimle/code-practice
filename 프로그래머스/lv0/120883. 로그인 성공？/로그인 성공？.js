function solution(id_pw, db) {
  let answer = "";
  for (let i = 0; i < db.length; i += 1) {
    if (db[i][0] === id_pw[0]) {
      if (db[i][1] === id_pw[1]) {
        answer = "login";
        break;
      } else {
        answer = "wrong pw";
        break;
      }
    } else {
      answer = "fail";
    }
  }
  return answer;
}