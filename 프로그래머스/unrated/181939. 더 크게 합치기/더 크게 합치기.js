function solution(a, b) {
    let answer = 0;
    let num1 = "";
    let num2 = "";
    
    num1 += a.toString() + b.toString()
    num2 += b.toString() + a.toString()
    
    answer = Math.max(Number(num1) , Number(num2))
    return answer;
}