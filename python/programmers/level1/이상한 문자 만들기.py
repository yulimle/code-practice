def solution(s):
    answer = []
    word=s.split(" ")
    for i in word:
        part=[]
        for j in range(0,len(i)):
            if j%2==0:
                part.append(i[j].upper())
            else:
                part.append(i[j].lower())
        part="".join(part)
        answer.append(part)
    answer=" ".join(answer)
    return answer
  
print(solution("try hello world"))
# 다시 풀어볼 문제