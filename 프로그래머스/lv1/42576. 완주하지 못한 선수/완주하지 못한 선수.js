function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  // completion.map((el) => {
  //   participant.splice(participant.indexOf(el), 1);
  // });
  // return participant[0];
  for (let i = 0; i < participant.length; i += 1) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
  return participant;
}