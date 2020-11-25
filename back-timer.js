"use strict";

class CountdownTimer {
  constructor({ selector, targetDate = new Date("December 17, 2020") }) {
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
      const days = String(
        Math.floor(this.intervalTime / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor(
          (this.intervalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
      ).padStart(2, "0");
      const mins = String(
        Math.floor((this.intervalTime % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const secs = String(
        Math.floor((this.intervalTime % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      this.refs.days.textContent = days;
      this.refs.hours.textContent = hours;
      this.refs.mins.textContent = mins;
      this.refs.secs.textContent = secs;
    }, 1000);
  }

}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("December 17, 2020"),
});

new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("February 15, 2021"),
});
