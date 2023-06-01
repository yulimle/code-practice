function solution(board, k) {
  let answer = 0;
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      i + j <= k ? (answer += board[i][j]) : (answer += 0);
    }
  }
  return answer;
}