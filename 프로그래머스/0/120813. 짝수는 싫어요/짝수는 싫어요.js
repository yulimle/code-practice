function solution(n) {
    var answer = [];
    for(let i=1 ; i<= n ; i+=1){
        if(i % 2 === 1){
            answer.push(i)
        }
    }
    return answer;
}