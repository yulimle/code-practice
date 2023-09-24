function solution(num_list, n) {
    let first = []
    let last = []
    first = num_list.slice(n, num_list.length)
    last = num_list.slice(0,n)
    return first.concat(last)
}