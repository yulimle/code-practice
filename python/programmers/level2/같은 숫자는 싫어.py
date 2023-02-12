def solution(arr):
    # answer=[]
    # for i in range(len(arr)):
    
    #     if arr[i] != arr[i+1]: #이런 식으로 하면 리스트 범위 초과 /오답
    #         answer.append(arr[i])
    #         answer.append(arr[i+1])
    #     else: 
    #         continue
            
    # return answer
    answer=[] #다른사람 풀이 참조
    for i in arr:
        if (len(answer) == 0) or (answer[-1] != i):
            answer.append(i)
    return answer
  
print(solution([1,1,3,3,0,1,1]))
print(solution([4,4,4,3,3]))