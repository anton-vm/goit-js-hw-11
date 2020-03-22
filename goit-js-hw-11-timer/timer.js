class CountdownTimer {
  constructor (selector, targetDate) {
    this.selector = selector;
    this.targetDate = new Date (targetDate);
    this.timeCount = this.timeCount.bind(this);
  }

  timeCount () {
    const day = document.querySelector('[data-value="days"]');
    const hour = document.querySelector("[data-value='hours']");
    const minute = document.querySelector("[data-value='mins']");
    const second = document.querySelector("[data-value='secs']");
    const timeNow = Date.now()
    this.time = this.targetDate - timeNow
    const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    day.textContent = days < 10 ? `0${days}` : days;
    const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hour.textContent = hours <10 ? `0${hours}` : hours;
    const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    minute.textContent = mins <10 ? `0${mins}` : mins;
    const secs = Math.floor((this.time % (1000 * 60)) / 1000);
    second.textContent = secs < 10 ? `0${secs}` : secs; 
  }
  start() {
    setInterval(this.timeCount, 1000);

  }
}

const countdownTimer = new CountdownTimer("#timer-1", "2020 june 12 21:00");
countdownTimer.start();