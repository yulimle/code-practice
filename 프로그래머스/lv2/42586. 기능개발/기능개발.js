function solution(progresses, speeds) {
  let answer = [];
  let days = [];
  let work = 0;

  for (let i = 0; i < progresses.length; i += 1) {
    let dayCount = 1;
    while (true) {
      if (progresses[i] + speeds[i] * dayCount >= 100) {
        days.push(dayCount);
        break;
      }
      dayCount += 1;
    }
  }

  let firstDay = days[0];
  for (let i = 0; i < days.length; i += 1) {
    if (days[i] <= firstDay) {
      work += 1;
    } else {
      answer.push(work);
      firstDay = days[i];
      work = 1;
    }
    if (i === days.length - 1) {
      answer.push(work);
    }
  }

  return answer;
}