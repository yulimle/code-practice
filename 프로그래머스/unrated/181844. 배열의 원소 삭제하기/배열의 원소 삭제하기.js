function solution(arr, delete_list) {
  let answer = [];

  delete_list.map((el) => {
    if (arr.includes(el)) {
      arr.splice(arr.indexOf(el), 1);
    }
  });
  return arr;
}