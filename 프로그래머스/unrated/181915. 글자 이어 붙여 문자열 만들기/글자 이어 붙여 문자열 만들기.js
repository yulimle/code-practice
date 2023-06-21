function solution(my_string, index_list) {
    let answer = ""
    for(let i=0 ; i< index_list.length ; i+=1){
        answer += my_string[index_list[i]]
    }
    return answer;
}