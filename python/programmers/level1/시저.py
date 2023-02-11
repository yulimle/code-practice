def solution(s, n):
    answer=''
    for i in range(len(s)):
        if s[i] == ' ':
            answer += ' '
        elif s[i].isupper(): 
          # 대문자일때
            answer += chr((ord(s[i]) + n - ord('A'))%26 + ord('A'))
        elif s[i].islower():
          # 소문자일때
            answer += chr((ord(s[i]) +n-ord('a'))%26 + ord('a'))
    return answer
  
print(solution("AB",1)) 
print(solution("z",1))
print(solution("a B z",4))