function solution(n) {
    let answer = 0
    for(let i = 0;i <= n ; i+=1){
        i % 2 === 0 ? answer += i : answer+= 0
    }
    return answer
}