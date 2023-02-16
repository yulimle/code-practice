def solution(d, budget):
    d.sort()
    answer=0
    for i in d:
        budget -= i
        if budget < 0:
            break
        else:
            answer+=1
            
    return answer
print(solution([1,3,2,5,4],9))
print(solution([2,2,3,3],10))