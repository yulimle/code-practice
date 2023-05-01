function solution(myString, pat) {
  let myStringArr = myString.split("");
  for (let i = 0; i < myStringArr.length; i += 1) {
    if (myStringArr[i] === "B") {
      myStringArr[i] = "A";
    } else {
      myStringArr[i] = "B";
    }
  }
  myString = myStringArr.join("");
  return myString.includes(pat) ? 1 : 0;
}