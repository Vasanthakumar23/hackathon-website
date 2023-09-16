import React, { useEffect } from 'react';
import '../CountDown/CountDown.css';

function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((time / 1000 / 60) % 60),
        seconds: Math.floor((time / 1000) % 60),
        total: time,
    };
}

function animateClock(span) {
    span.classList.add('animate__flipOutY');
    setTimeout(function () {
        span.classList.remove('animate__flipOutY');
    }, 1000);
}

function CountdownTimer() {
    useEffect(() => {
        function startTimer(id, deadline) {
            var timerInterval = setInterval(function () {
                var clock = document.getElementById(id);
                if (clock) {
                    var timer = updateTimer(deadline);

                    clock.innerHTML =
                        '<span>' +
                        timer.days +
                        '</span>' +
                        '<span>' +
                        timer.hours +
                        '</span>' +
                        '<span>' +
                        timer.minutes +
                        '</span>' +
                        '<span>' +
                        timer.seconds +
                        '</span>';

                    // Animation
                    var spans = clock.getElementsByTagName('span');
                    animateClock(spans[3]);
                    if (timer.seconds === 59) animateClock(spans[2]);
                    if (timer.minutes === 59 && timer.seconds === 59) animateClock(spans[1]);
                    if (timer.hours === 23 && timer.minutes === 59 && timer.seconds === 59)
                        animateClock(spans[0]);

                    // Check for the end of time
                    if (timer.total < 1) {
                        clearInterval(timerInterval);
                        clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
                    }
                } 
                
            }, 1000);
        }

        var deadline = new Date('October 07, 2023 12:00:00');
        startTimer('clock', deadline);
    }, []);

    return (
        <div id="main">
            <div id="clock">
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
            </div>
            <div id="display">
                <span>Days</span> <span>Hours</span> <span>Minutes</span>
                <span>Seconds</span>
            </div>
        </div>
    );
}

export default CountdownTimer;
