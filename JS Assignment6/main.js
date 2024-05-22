document.addEventListener('DOMContentLoaded', () => {
    let timer;
    let isRunning = false;
    let [hours, minutes, seconds] = [0, 0, 0];
  
    const display = document.getElementById('display');
    const startStopBtn = document.getElementById('startStopBtn');
    const pauseBTN = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
  
    function updateDisplay() {
      display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    function startStop() {
      if (isRunning) {
        pauseWatch();
        
      } else {
        timer = setInterval(() => {
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
              minutes = 0;
              hours++;
            }
          }
          updateDisplay();
        }, 1000);
       
      }
    
    }
    function pauseWatch() {

        clearInterval(timer);
        // pauseBTN.textContent = 'Resume';
        startStopBtn.textContent = 'Start';
        isRunning = !isRunning;
        updateDisplay();    
    }
    function reset() {
      clearInterval(timer);
      isRunning = false;
      [hours, minutes, seconds] = [0, 0, 0];
      updateDisplay();
      startStopBtn.textContent = 'Start';
    }
  
    startStopBtn.addEventListener('click', startStop);
    pauseBtn.addEventListener('click', pauseWatch);
    resetBtn.addEventListener('click', reset);
  });
  
