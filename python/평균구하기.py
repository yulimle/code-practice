def solution(arr):
  answer = 0
  for i in arr:
    answer += i
  return (answer/len(arr))

print(solution([1,2,3,4]))
print(solution([5,5]))