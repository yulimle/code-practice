function solution(arr, k) {
    var answer = [];
    for(let i=0 ; i < arr.length ; i+=1){
        if(!answer.includes(arr[i])){
            answer.push(arr[i])
        }
    }
    if(answer.length > k){
        return answer.slice(0,k)
    }
    while(answer.length < k){
        answer.push(-1)
    }
    return answer;
}