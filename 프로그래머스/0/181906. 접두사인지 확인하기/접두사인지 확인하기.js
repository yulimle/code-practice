function solution(my_string, is_prefix) {
    for(let i = 0; i < is_prefix.length ; i+=1){
        if(my_string[i] !== is_prefix[i]){
            return 0
        }
    }
    return 1
}