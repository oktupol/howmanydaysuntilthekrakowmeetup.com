import { Constants } from "./constants";
import { getMeetupState } from "./meetup";

/**
 * Refresh the countdown element
 * 
 * @param {Element} countdownElement 
 */
export function refreshCountdown(countdownElement) {
    let meetup = getMeetupState(new Date(), Constants.MEETUP_START_DATE, Constants.MEETUP_END_DATE);

    if (!meetup.started && !meetup.ended) {
        if (meetup.days !== 0) {
            countdownElement.innerHTML = [
                'Only',
                meetup.days,
                'more',
                meetup.days === 1 ? 'day' : 'days',
                'until the Krakow meetup!'
            ].join(' ');
        } else {
            countdownElement.innerHTML = 'Less than a day until the Krakow meetup!';
        }
    } else if (!meetup.ended) {
        countdownElement.innerHTML = 'The meetup is going on right now!';
    } else {
        countdownElement.innerHTML = 'The meetup is over :(';
        countdownElement.classList.add('meetup-over');
    }
}