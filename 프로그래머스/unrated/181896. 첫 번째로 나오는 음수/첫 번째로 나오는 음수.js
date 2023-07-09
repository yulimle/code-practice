function solution(num_list) {
    let answer = 0;
    for(let i =0 ; i< num_list.length ; i+=1){
        if(num_list[i] < 0){
            answer = i + 1
            break;
        }
    }
    answer === 0 ? answer = -1 : answer -= 1;
    return answer
}