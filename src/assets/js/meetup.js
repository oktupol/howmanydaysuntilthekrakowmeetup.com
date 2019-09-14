/**
 * Returns information about the meetup
 * 
 * @param {Date} today 
 * @param {Date} meetupStartDate 
 * @param {Date} meetupEndDate 
 * @return {{days: Number, started: boolean, ended: boolean}}
 */
export function getMeetupState(today, meetupStartDate, meetupEndDate) {
    let differenceUntilStart = (meetupStartDate - today) / 3600000 / 24,
        roundedDifferenceUntilStart = Math.round(differenceUntilStart),
        differenceUntilEnd = meetupEndDate - today;

    return {
        days: roundedDifferenceUntilStart,
        started: differenceUntilStart <= 0,
        ended: differenceUntilEnd < 0
    };
}