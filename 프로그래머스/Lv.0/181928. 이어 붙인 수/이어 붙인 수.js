function solution(num_list) {
    var answer = 0;
    let even = ""
    let odd = ""
    num_list.map(el=>{
        el % 2 === 1 ? odd += el.toString() : even += el.toString()
    })
    return Number(even) + Number(odd);
}