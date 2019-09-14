import './assets/scss/style.scss';
import Constants from './assets/js/constants.js';
import getMeetupState from './assets/js/meetup.js';

function setCounter() {
    let counterElem = document.getElementById('counter');
    let meetup = getMeetupState(new Date(), Constants.MEETUP_START_DATE, Constants.MEETUP_END_DATE);

    if (!meetup.started && !meetup.ended) {
        if (meetup.days !== 0) {
            counterElem.innerHTML = [
                'Only',
                meetup.days,
                'more',
                meetup.days === 1 ? 'day' : 'days',
                'until the Krakow meetup!'
            ].join(' ');
        } else {
            counterElem.innerHTML = 'Less than a day until the Krakow meetup!';
        }
    } else if (!meetup.ended) {
        counterElem.innerHTML = 'The meetup is going on right now!';
    } else {
        counterElem.innerHTML = 'The meetup is over :(';
        counterElem.classList.add('meetup-over');
    }
}

// Initialize once
setCounter();
setInterval(setCounter, Constants.REFRESH_INTERVAL);