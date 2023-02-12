def solution(s):
    if len(s) ==4 or len(s) ==6:
        answer = s.isdigit() #주어진 문자열이 숫자인지
    else:
        answer = False
    return answer
  
print(solution("a234"))
print(solution("1234"))