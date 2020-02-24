const meetingsString = "Mon 01:00-23:00\nTue 01:00-23:00\nWed 01:00-23:00\nThu 01:00-23:00\nFri 01:00-23:00\nSat 01:00-23:00\nSun 01:00-21:00";


function solution(S) {
  let longestRestTime = 0;
  const daysData = {
    Mon: [],
    Tue: [],
    Wed: [],
    Thu: [],
    Fri: [],
    Sat: [],
    Sun: [],
  };

  const meetingsArray = S.split('\n');
  sortMeetingsToDays(meetingsArray, daysData);
  
  let contestingTime
  Object.keys(daysData).map((key, index) => daysData[key].map(ob => {
    if (index !== Object.keys(daysData).length - 1) {
      contestingTime = (1440 - ob.endTime) + daysData[Object.keys(daysData)[index + 1]][0].startTime
      
      if (contestingTime > longestRestTime) {
        longestRestTime = contestingTime;
      }
    }
  }));
  
  return longestRestTime;
}

function sortMeetingsToDays(meetingArray, ob) {
  meetingArray.map(meeting => {
    if (meeting.includes('Mon')) {
      ob.Mon.push(convertTimeToMinutes(meeting.slice(4)))
    } else if (meeting.includes('Tue')) {
      ob.Tue.push(convertTimeToMinutes(meeting.slice(4)))
    } else if (meeting.includes('Wed')) {
      ob.Wed.push(convertTimeToMinutes(meeting.slice(4)))
    } else if (meeting.includes('Thu')) {
      ob.Thu.push(convertTimeToMinutes(meeting.slice(4)))
    } else if (meeting.includes('Fri')) {
      ob.Fri.push(convertTimeToMinutes(meeting.slice(4)))
    } else if (meeting.includes('Sat')) {
      ob.Sat.push(convertTimeToMinutes(meeting.slice(4)))
    } else if (meeting.includes('Sun')) {
      ob.Sun.push(convertTimeToMinutes(meeting.slice(4)))
    }
  });
}

function convertTimeToMinutes(meetingTime) {
  let startOfMeeting;
  let endOfMeeting;

  let meetingDurationArray = meetingTime.split('-');

  const startOfMeetingArray = meetingDurationArray[0].split(':');
  startOfMeeting = parseInt(startOfMeetingArray[0], 10) * 60;
  startOfMeeting += parseInt(startOfMeetingArray[1], 10);
  
  const endOfMeetingArray = meetingDurationArray[1].split(':');
  endOfMeeting = parseInt(endOfMeetingArray[0], 10) * 60;
  endOfMeeting += parseInt(endOfMeetingArray[1], 10);
  
  return {startTime: startOfMeeting, endTime: endOfMeeting};
}

solution(meetingsString)
