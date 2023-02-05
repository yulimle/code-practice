def solution(price, money, count):
    answer = 0
    num = 0
    for i in range(1,count+1):
        num += i
    answer = (price * num) - money
    if answer < 0:
        answer = 0
    
    return answer
  
print(solution(3,20,4))