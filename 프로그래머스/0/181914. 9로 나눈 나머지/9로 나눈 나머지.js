function solution(number) {
    var answer = 0;
    const arr = number.split("")
    arr.forEach(el=>{
        answer += Number(el) 
    })
    return answer % 9;
}