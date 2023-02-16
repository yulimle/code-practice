def solution(x, n):
    answer = []
    for i in range(n):
        answer.append((i+1)*x) #0일때 런타임 에러 안나도록
    return answer
  
print(solution(2,5))
print(solution(4,3))
print(solution(-4,2))