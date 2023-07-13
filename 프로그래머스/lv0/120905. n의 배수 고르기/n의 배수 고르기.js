function solution(n, numlist) {
    let answer = []
    numlist.map(el=>{
        el % n === 0 ? answer.push(el) : ""
    })
    return answer
}