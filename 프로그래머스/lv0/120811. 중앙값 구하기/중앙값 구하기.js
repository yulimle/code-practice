function solution(array) {
    array.sort((a,b) => a-b)
    return array.length % 2 === 0? array[array.length/2] : array[Math.floor(array.length / 2)]
}