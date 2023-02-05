def solution(n):
    answer = n
    ncnt = bin(n).count('1')
    
    while True:
        answer+=1
        answercnt = bin(answer).count('1')
        if answercnt == ncnt:
            break
            
    return answer
  
print(solution(78))
print(solution(15))