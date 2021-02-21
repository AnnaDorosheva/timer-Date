"use strict";

class CountdownTimer {
  constructor({ selector, targetDate = new Date("January 30, 2021") }) {
    (this.targetDate = targetDate),
      (this.selector = document.querySelector(`${selector}`)),
      (this.refs = {
        days: this.selector.querySelector('span[data-value="days"]'),
        hours: this.selector.querySelector('span[data-value="hours"]'),
        mins: this.selector.querySelector('span[data-value="mins"]'),
        secs: this.selector.querySelector('span[data-value="secs"]'),
      });

    this.start();
  }

  start() {
    this.timerId = setInterval(() => {
      this.currentTime = Date.now();

      this.intervalTime = this.targetDate - this.currentTime;

      const days = this.pad(
        Math.floor(this.intervalTime / (1000 * 60 * 60 * 24))
      );
      const hours = this.pad(
        Math.floor(
          (this.intervalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
      );
      const mins = this.pad(
        Math.floor((this.intervalTime % (1000 * 60 * 60)) / (1000 * 60))
      );
      const secs = this.pad(
        Math.floor((this.intervalTime % (1000 * 60)) / 1000)
      );

      this.updateClockface(days, hours, mins, secs);
    }, 1000);

  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateClockface(day, hour, min, sec) {
    this.refs.days.textContent = day;
    this.refs.hours.textContent = hour;
    this.refs.mins.textContent = min;
    this.refs.secs.textContent = sec;
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("July 30, 2021"),
});

new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("February 15, 2022"),
});
