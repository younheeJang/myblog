import React, {useState, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const TimerBasic: React.FC = () => {
    let duration:number;
    let intervalId = useRef(null)
    let [timeRemaining, setTimeRemaining] = useState(30);
    let [strokeDashOffset, setStrokeDashOffset] = useState(0);
    let [r, setR] = useState(150);
    let [strokeDashArray, setStrokeDashArray] = useState(r*2 *Math.PI);
   const start = () => {
    duration = timeRemaining;
    tick();
    intervalId.current = setInterval(tick, 20);     
   };

   const pause = () => {
    clearInterval(intervalId.current); 
   }
    const perimeter = r*2 *Math.PI;
    const tick = () => {
        if(timeRemaining<=0){
            pause();
            setTimeRemaining(0)
        }else {
           timeRemaining = timeRemaining - 0.02;
           setTimeRemaining(Number(timeRemaining.toFixed(2)));
           setStrokeDashOffset(perimeter*timeRemaining /duration-perimeter)
        }
    }
    
    const handleChange = (e) =>{
        if(e.target.value === ''){setTimeRemaining(0)}
        else {setTimeRemaining(parseFloat(e.target.value))}
    }
    

return (
    <div className='grid justify-items-center'>
    <svg height='400' width='400'>
        <circle strokeDasharray={strokeDashArray} transform="rotate(-90 200 200)" r={r} cx='200' cy='200' fill='transparent' stroke='pink' strokeWidth='10' strokeDashoffset={strokeDashOffset} onChange={(e)=>{console.log(e.target)}}/>
    </svg>
    <div>
    <input id='duration' className='float-left' value={timeRemaining} onChange={handleChange}/>
    <button id='start' className='h-3 w-3 mr-10' onClick={start}><FontAwesomeIcon icon={faPlay} /></button>
    <button id='pause' className='h-3 w-3' onClick={pause}><FontAwesomeIcon icon={faPause} /></button>
    </div>
    </div>
  );
};

export default TimerBasic;
