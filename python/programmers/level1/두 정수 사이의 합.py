def adder(a, b):
    # 함수를 완성하세요
    if a > b: a, b = b, a

    return sum(range(a,b+1))

# 아래는 테스트로 출력해 보기 위한 코드입니다.
print( adder(3, 5))

#내 풀이
def solution(a, b):
    answer = 0
    if a == b:
        answer = a
    else:
        for i in range(min(a,b) , max(a,b)+1):
            answer+=i


    return answer