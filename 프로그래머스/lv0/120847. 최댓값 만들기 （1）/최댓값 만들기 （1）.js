function solution(numbers) {
    let answer = 0;
    let max_num = 0
    max_num = Math.max(...numbers)
    numbers.splice(numbers.indexOf(max_num), 1);
    answer = max_num * Math.max(...numbers);
    return answer
}