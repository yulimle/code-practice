function solution(array, height) {
    let answer = 0
    array.map(el=>{
        el > height ? answer += 1 : answer += 0
    })
    return answer
}