def solution(s):
    answer = True
    s = s.lower()
    if s.count('p') == s.count('y'):
        answer = True
    elif s.count('p') == 0 and s.count('y') == 0:
        answer = False    
    else:
        answer = False

    return answer
  
print(solution("pPoooyY"))