function solution(array, n) {
    let answer = 0
    array.map(el=>{
        el === n ? answer += 1 : answer += 0
    })
    return answer
}