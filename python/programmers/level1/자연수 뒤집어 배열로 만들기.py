def digit_reverse(n):
    return list(map(int, reversed(str(n))))
  
print(digit_reverse(12345))


#내 풀이
def solution(n):
    answer = []
    for _ in range(len(str(n))):
        answer.append(n % 10)
        n = n//10
    return answer

