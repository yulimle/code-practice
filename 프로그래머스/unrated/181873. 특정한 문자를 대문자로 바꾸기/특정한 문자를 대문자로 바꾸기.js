function solution(my_string, alp) {
  let arrString = [];
  arrString = my_string.split("");

  for (let i = 0; i < arrString.length; i += 1) {
    if (arrString[i] === alp) {
      arrString[i] = arrString[i].toUpperCase();
    }
  }
  return arrString.join("");
}