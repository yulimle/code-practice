function solution(arr1, arr2) {
    var answer = 0;
    let sum1 = 0
    let sum2 = 0
    if(arr1.length > arr2.length){
        return 1
    }else if(arr1.length < arr2.length){
        return -1
    }
    arr1.map(el=>{
        sum1 += el
    })
    
    arr2.map(el=>{
        sum2 += el
    })
    
    if(sum1 > sum2){
        return 1
    }else if(sum1 < sum2){
        return -1
    }else if(sum1 === sum2){
        return 0
    }
}