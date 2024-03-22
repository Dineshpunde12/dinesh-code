document.addEventListener('DOMContentLoaded', function() {
    const alarmTimeInput = document.getElementById('alarm-time');
    const setAlarmButton = document.getElementById('set-alarm');
    const alarmStatus = document.getElementById('alarm-status');
    let alarmTime;
  
    setAlarmButton.addEventListener('click', function() {
      alarmTime = alarmTimeInput.value;
      if (alarmTime) {
        setAlarm(alarmTime);
      } else {
        alert('Please set alarm time!');
      }
    });
    
  
    function setAlarm(time) {
      alarmTime = time;
      alarmStatus.textContent = `Alarm set for ${alarmTime}`;
    }
  
    setInterval(checkAlarm, 1000);
  
    function checkAlarm() {
      if (!alarmTime) return;
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const formattedCurrentTime = formatTime(hours, minutes);
  
      if (formattedCurrentTime === alarmTime) {
        alarmStatus.textContent = 'Alarm! Wake Up!';
        alarmTime = null; // Reset alarm time after it rings
      } else {
        alarmStatus.textContent = '';
      }
    }
  
    function formatTime(hours, minutes) {
      return `${padZero(hours)}:${padZero(minutes)}`;
    }
  
    function padZero(value) {
      return value < 10 ? `0${value}` : value;
    }
  
  });
  