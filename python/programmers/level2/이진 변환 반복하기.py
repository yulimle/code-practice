# 내 코드(시간 복잡도 낮음->틀림)
# def solution(s):
#     s = list(s)
#     answer=[]
#     num_zero=0
#     tran=0
#     while s != ["1"]:
#         while True:
#             if '0' in s:
#                 s.remove('0')
#                 num_zero+=1
#             else:
#                 break
#         c = bin(len(s))[2:]
#         s = list(c)
#         tran+=1
#     answer.append(tran)
#     answer.append(num_zero)
#     return answer
  
def solution(s):
  answer=[]
  num_zero=0
  tran=0
  while s != "1":
      num_zero += s.count('0')
      s=s.replace('0','') #0이 들어있으면 공백으로 바꿔줌 replace는 문자열에서 작용
      c = bin(len(s))[2:] #이진법 표시인 0b 빼고 이진수 변환
      s = str(c) #리스트 문자열로 바꿔줌
      tran+=1
      answer = [tran, num_zero]
  return answer

print(solution("110010101001"))
print(solution("01110"))
print(solution("1111111"))
