function solution(num, k) {
    var answer = 0;
    let numStr = num.toString()
    for(let i = 0; i < numStr.length; i += 1){
        if(numStr[i] == k){
            answer = i + 1
            break
        }
    }
    return answer === 0 ? -1 : answer;
}