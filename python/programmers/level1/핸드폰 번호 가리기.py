# 내풀이
def solution(phone_number):
    phone_number = list(phone_number)
    for i in range(len(phone_number)-4):
        phone_number[i] = '*'
    return ''.join(phone_number)

#다른 사람 풀이
def hide_numbers(s):
    return "*"*(len(s)-4) + s[-4:]

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print("결과 : " + hide_numbers('01033334444'));