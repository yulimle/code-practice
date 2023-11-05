function solution(str_list, ex) {
    let answer = ""
    str_list.map(el=>{
        el.includes(ex) ? "" : answer += el
    })
    return answer
}