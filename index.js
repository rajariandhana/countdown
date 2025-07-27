const targetDate = new Date("2025-11-02T00:00:00")
const interval = setInterval(function(){
  const now = new Date()
  const timeRemaining = targetDate - now
  if(timeRemaining<=0){
    clearInterval(interval)
    const res = "TIME's UP BITCH"
    document.getElementById("timer").innerHTML = res
    document.title = res
  } else{
    // const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // const res = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    const res = `${hours} : ${formattedMinutes} : ${formattedSeconds}`;
    document.title = res
    document.getElementById("timer").innerHTML = res
  }
},1000)