"use strict";

const refs = {
  startBtn: document.querySelector('button[data-action="start-timer"]'),
  stopBtn: document.querySelector('button[data-action="stop-timer"]'),
  clockFace: document.querySelector('.js-clockface'),
};

const timer = {
  isActive: false,
  start() {

    if(this.isActive) {
      return
    };

    this.isActive = true;
    const startTime = Date.now();

    this.timerId = setInterval(() => {
      const currentTime = Date.now();

      this.deltaTime = currentTime - startTime;

  //     const date = new Date(deltaTime);

  // const hours = pad(date.getUTCHours());
  // const min = pad(date.getUTCMinutes());
  // const sec = pad(date.getUTCSeconds());

  updateClockface(this.deltaTime);
    }, 1000);
    
  },

  stop() {
    this.isActive = false;
    clearInterval(this.timerId);
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  }
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function pad (value) {
return String(value).padStart(2, '0');
};

function updateClockface(time) {

  const date = new Date(time);

  const hours = pad(date.getUTCHours());
  const min = pad(date.getUTCMinutes());
  const sec = pad(date.getUTCSeconds());
  refs.clockFace.textContent = `${hours}:${min}:${sec}`;
};