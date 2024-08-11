function solution(rank, attendance) {
    var answer = 0;
    let top = []
    rank.indexOf(1)
    
    rank.forEach((el,idx)=>{
        attendance[rank.indexOf(idx+1)] === true ? top.push(rank.indexOf(idx+1)) : ""
    })
    answer = 10000 * top[0] + 100 * top[1] + top[2]
    return answer;
}