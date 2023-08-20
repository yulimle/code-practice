function solution(n, slicer, num_list) {
    var answer = [];
    if(n === 1){
        answer = num_list.slice(0,slicer[1] + 1)    
    }else if(n === 2){
        answer = num_list.slice(slicer[0],num_list.length + 1)
    }else if(n === 3){
        answer = num_list.slice(slicer[0],slicer[1] + 1)
    }else if(n === 4){
        let newArr = []
        answer = num_list.slice(slicer[0],slicer[1] + 1)
        for(let i=0 ; i<answer.length ; i+= slicer[2]){
            newArr.push(answer[i])
        }
        answer = newArr
    }
    
    return answer;
}