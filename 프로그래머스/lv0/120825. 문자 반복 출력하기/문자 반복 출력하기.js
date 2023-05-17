function solution(my_string, n) {
    let answer = '';
    for(let i=0;i<my_string.length; i+=1){
        let count = 1
        while(count <= n)
        {answer += my_string[i]
         count += 1
        }
        
    }
    return answer;
}