def solution(s):
    s = list(s)
    answer = ''.join(sorted(s,reverse=True))
    return answer
  
print(solution("Zbcdefg"))