function solution(myString) {
    var answer = [];
    let str = myString.split("x")
    str.map(el =>{
        answer.push(el.length)
    })
    return answer;
}