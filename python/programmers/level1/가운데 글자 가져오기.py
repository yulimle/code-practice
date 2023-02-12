def solution(s):
    # answer = ''
    # n = int(len(s)/2)
    # if len(s) % 2 == 0:
    #     answer+= s[n-1]
    #     answer+= s[n]
    # else:
    #     answer+=s[n]
    # return answer
    x = len(s)
    if x%2 ==1:
      answer = s[x//2]
    else:
      answer = s[x//2-1:x//2+1] 
    return answer
  
print(solution("abcde"))
print(solution("qwer"))