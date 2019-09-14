import './assets/scss/style.scss';

function setCounter() {
    let counterElem = document.getElementById('counter'),
        currentDate = new Date(),
        meetupDate = new Date('Oct 30 2019 15:00:00 +0100'),
        meetupEndDate = new Date('Nov 3 2019 12:00:00 +0100');

    // difference in days
    let difference = (meetupDate - currentDate) / 3600000 / 24,
        roundedDifference = Math.round(difference),
        plural = roundedDifference !== 1;

    let hasMeetupStarted = difference <= 0;
    let isMeetupOver = meetupEndDate - currentDate < 0;

    if (!isMeetupOver && !hasMeetupStarted) {
        if (roundedDifference !== 0) {
            counterElem.innerHTML = [
                'Only',
                roundedDifference,
                'more',
                plural ? 'days' : 'day',
                'until the Krakow meetup!'
            ].join(' ');
        } else {
            counterElem.innerHTML = 'Less than a day until the Krakow meetup!';
        }
    } else if (hasMeetupStarted && !isMeetupOver) {
        counterElem.innerHTML = 'The meetup is going on right now!';
    } else {
        counterElem.innerHTML = 'The meetup is over :(';
        counterElem.classList.add('meetup-over');
    }
}

// Initialize once
setCounter();
// Refresh every minute
setInterval(setCounter, 60000);