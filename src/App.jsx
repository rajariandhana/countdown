import { useEffect, useState } from 'react'
// import './App.css'
// import './assets/fonts/fonts.css'

const untils = [
  {
    key:'sem-2-start',
    label:'Semester 2 Classes Starts',
    timeText:"28 July 2025 - 8 AM",
    time:new Date("2025-07-28T08:00:00")
  },
  {
    key:'mid-class-end',
    label:"Classes end for mid-semester break",
    timeText:"27 September 2025 - 6 PM",
    time:new Date("2025-09-27T18:00:00")
  },
  {
    key:'class-end',
    label:"Sem 2 classes end",
    timeText:"1 November 2025 - 6 PM",
    time:new Date("2025-11-01T18:00:00")
  },
  {
    key:'exam-starts',
    label:"Exam starts",
    timeText:"8 November 2025 - 8 AM",
    time:new Date("2025-11-08T08:00:00")
  },
  {
    key:'exam-end',
    label:"Exam ends",
    timeText:"22 November 2025 - 6 PM",
    time:new Date("2025-11-22T18:00:00")
  },
]

function App() {
  const [until] = useState(untils[2]);
  const [targetTime] = useState(until.time)
  // const targetTime = new Date("2025-11-02T00:00:00")
  // const [selected, setSelected]=useState('')

  const [time,setTime] = useState({
    hours:0,
    minutes:0,
    seconds:0,
  })

  useEffect(()=>{
    const {hours,minutes,seconds} = getTimeLeft(targetTime);
    setTime({
      hours,
      minutes,
      seconds
    })
  },[targetTime])

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTime(prev=>{
        let {hours,minutes,seconds}=prev;
        if(hours===0 && minutes===0 && seconds===0){
          clearInterval(interval);
          return prev
        }
        if(seconds>0){
          return {...prev, seconds:seconds-1}
        }
        if(minutes>0){
          return {hours, minutes:minutes-1, seconds:59}
        }
        if(hours>0){
          return {hours:hours-1, minutes:59, seconds:59}
        }
        return prev
      })
    },1000)
    return ()=>clearInterval(interval)
  },[])

  useEffect(()=>{
    document.title = `${format(time.hours)} : ${format(time.minutes)} : ${format(time.seconds)}`
  },[time])

  const format = n => n.toString().padStart(2,'0');

  function getTimeLeft(target){
    const timeRemaining = Date.parse(target) - Date.now();

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  // const handleSelect=(e)=>{
  //   switch (e) {
  //     case 'mid-sem':
  //       setTargetTime(new Date("2025-09-27T00:00:00"))
  //       break
  //     case 'mid-sem-break-start':
  //       setTargetTime(new Date("2025-09-29T00:00:00"))
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <main className='flex flex-col items-center justify-center gap-y-2 font-mono'>
      <h1 className='text-md md:text-2xl text-red-500'>
        When does {until.label}?
      </h1>
      <div className='bg-black rounded-lg shadow-md px-6 md:px-12 py-4 md:py-6
        text-4xl md:text-8xl
        border-red-500 border-1
        text-red-500 text-right flex gap-x-2
        text-shadow-red-400 text-shadow-lg'
        style={{fontFamily:'DS-Digital'}}>
        <div className='flex w-24 md:w-48'>
          <span className='w-6 md:w-12'>{Math.floor(time.hours/1000) % 10}</span>
          <span className='w-6 md:w-12'>{Math.floor(time.hours/100) % 10}</span>
          <span className='w-6 md:w-12'>{Math.floor(time.hours/10) % 10}</span>
          <span className='w-6 md:w-12'>{time.hours%10}</span>
        </div>
        <span>:</span>
        <div className='flex w-12 md:w-24'>
          <span className='w-6 md:w-12'>{Math.floor(time.minutes/10)}</span>
          <span className='w-6 md:w-12'>{time.minutes%10}</span>
        </div>
        <span>:</span>
        <div className='flex w-12 md:w-24'>
          <span className='w-6 md:w-12'>{Math.floor(time.seconds/10)}</span>
          <span className='w-6 md:w-12'>{time.seconds%10}</span>
        </div>
      </div>
      <h2 className='text-xs md:text-md text-red-500'>
        Countdown until {until.timeText}
      </h2>
      <footer className='fixed bottom-4 text-red-500 flex gap-2 md:gap-4 text-xs md:text-sm items-center'>
        <span>"EVERY SECOND COUNTS"</span>
        <span>|</span>
        <a href="https://github.com/rajariandhana/countdown" target="_blank" >
          <svg className="size-4 md:size-6 text-red-500 funny-rotate" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
          </svg>
        </a>
      </footer>
      {/* <div>
        <select name="" id="" value={until.key} onChange={handleSelect}>
          <option value="">-- Select --</option>
          {untils.map((element) => (
            <option key={element.key} value={element.key}>
              {element.label} - {element.timeText}
            </option>
          ))}
        </select>
      </div> */}
    </main>
  )
}

export default App
