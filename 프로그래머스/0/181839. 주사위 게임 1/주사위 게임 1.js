function solution(a, b) {
    var answer = 0;
    if(a % 2 === 1){
        if(b % 2 === 1){
            answer = a * a + b * b    
        }else{
            answer = 2 * (a + b) 
        }
    }else{
        if(b % 2 === 1){
            answer = 2 * (a + b)    
        }else{
            answer = Math.abs(a-b)
        }
    }
    return answer;
}