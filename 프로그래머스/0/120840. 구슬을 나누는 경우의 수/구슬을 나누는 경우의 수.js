function solution(balls, share) {
    let b = test(balls)
    let m = test(share)
    let n = test(balls - share)
    return  Math.round(b / (m * n));
}

function test(n){
    let answer = 1
    if(n === 0){
        return 1 
    }
    for(let i = 1; i <= n ; i+=1){
        answer = answer * i 
    }
    return answer
}