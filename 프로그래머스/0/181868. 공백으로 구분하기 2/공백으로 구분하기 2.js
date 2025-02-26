function solution(my_string) {
    var answer = [];
    let newArr = my_string.split(" ")
    newArr.forEach(el=>{
        if(el !== ""){
            answer.push(el)
        }
    })
    
    return answer;
}