function solution(my_string) {
    const arr = [0,1,2,3,4,5,6,7,8,9]
    let answer = 0
    for(let i =0 ; i< my_string.length ; i+=1){
        arr.includes(Number(my_string[i])) ?  answer += Number(my_string[i]) : answer += 0
    }
    return answer
}