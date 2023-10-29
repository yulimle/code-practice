function solution(code) {
    let ret = '';
    let mode = 0
    for(let idx = 0; idx < code.length ; idx += 1){
        if(mode === 0){
            if(code[idx] === "1"){
                mode = 1
            }else{
                idx % 2 === 0 ? ret += code[idx] : ""
            }
        }else if(mode === 1){
            if(code[idx] === "1"){
                mode = 0
            }else{
                idx % 2 === 1 ? ret += code[idx] : ""
            }
        }
    }
    
    return ret.length === 0 ? "EMPTY" : ret;
}