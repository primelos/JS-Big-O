// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// s = '12:01:00PM'
// Return '12:01:00'.

// s = '12:01:00AM'
// Return '00:01:00'.
// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {
    let hour = parseInt(s.split(':'))
    let AMPM = s.includes('AM') ? 'AM' : 'PM'

    (hour < 12 && AMPM === 'PM') ? (hour + 12) + ':' :
    (hour === 12 && AMPM === 'PM') ? hour = ':' :
    (hour < 12 && AMPM === 'AM') ? hour + ':' :
    '00:'

    return `${hour.padStart(3, 0)}${s.substring(3)}.replace(AMPM, '')`
}