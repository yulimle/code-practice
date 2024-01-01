function solution(cipher, code) {
    var answer = '';

    for(let i=0 ; i < cipher.length ; i+=1){
        if((i+1) % code === 0) {
            answer += cipher[i]
        }
    }
    return answer
}