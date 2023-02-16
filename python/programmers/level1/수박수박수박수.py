def water_melon(n):
    return "수박"*(n//2) + "수"*(n%2) #나머지와 몫으로 생각하기


# 실행을 위한 테스트코드입니다.
print("n이 3인 경우: " + water_melon(3));
print("n이 4인 경우: " + water_melon(4));

#내 풀이
def solution(n):
    answer = ''
    if n == 1:
        answer+="수"
    elif n % 2 ==0:
        answer += '수박'* int(n/2)
    else:
        answer+='수'
        answer += '박수' * int(n/2)
    return answer