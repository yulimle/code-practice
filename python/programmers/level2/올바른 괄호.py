def solution(s):
    answer = True
    s = list(s)
    left = 0
    right = 0
    if s.count('(') != s.count(')'): #애초에 둘의 개수가 다르면 탈락
        answer = False
    for i in range(len(s)):
        if s[i] == "(":
            left+=1
        elif s[i] == ')':
            right+=1
        if left < right : #왼쪽 괄호보다 오른쪽 괄호가 많아지는 순간 탈락 
            answer = False
            break
    return answer
  
print(solution("()()"))
print(solution("(())()"))
print(solution(")()("))
print(solution("(()("))