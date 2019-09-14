import './assets/scss/style.scss';
import { Constants } from './assets/js/constants';
import { refreshCountdown } from './assets/js/countdown';

let countdownElement = document.getElementById('countdown');

// Initialize once
refreshCountdown(countdownElement);
// Then refresh every so often
setInterval(function () {
    refreshCountdown(countdownElement);
 }, Constants.REFRESH_INTERVAL);