import math
def solution(n):
    answer = 0
    if math.sqrt(n) == int(n ** 0.5):
        answer = (math.sqrt(n) +1) **2
    else:
        answer = -1
    
    return answer
  
print(solution(121))
print(solution(3))