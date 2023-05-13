function solution(n) {
    let numArr = String(n).split("")
    let answer = 0
    numArr.map(el=>{
        answer += Number(el)
    })
    return answer;
}