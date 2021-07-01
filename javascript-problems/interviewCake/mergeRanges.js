function mergeRanges(meetings) {
  // Merge meetings ranges

  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });
  console.log(sortedMeetings);

  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeetings = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeetings.endTime) {
      lastMergedMeetings.endTime = Math.max(
        lastMergedMeetings.endTime,
        currentMeeting.endTime
      );
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
}

console.log(
  mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
  ])
);
