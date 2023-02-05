def solution(n):
    answer = 0
    num = 0
    for i in range(0,len(str(n))):
        num = n%10
        n = n//10
        answer += num
    return answer

print(solution(123))
print(solution(987))