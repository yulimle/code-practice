function solution(myString) {
    let answer =[]
    myString = myString.split("x").sort()
    myString.map(el=>{
        el.length > 0 ? answer.push(el) : answer
    })
    return answer;
}