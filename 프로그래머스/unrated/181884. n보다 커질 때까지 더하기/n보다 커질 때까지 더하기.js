function solution(numbers, n) {
    let sumNum = 0
    numbers.map(el=>{
        if(sumNum > n){
            return sumNum
        } 
        sumNum += el
    })
    return sumNum
}