def solution(numbers):
  # 내 답(효율성 bad)
    # answer = 0
    # for num in numbers:
    #     for j in range(10):
    #         if num == j:
    #             answer += num
    # return 45-answer
    
  # 다른 사람 풀이 
    answer = 45
    for i in range(len(numbers)):
      answer -= numbers[i]
    return answer
  
print(solution([1,2,3,4,6,7,8,0]))
print(solution([5,8,4,0,6,7,9]))

