import React from 'react'
import { useState,useEffect } from 'react'


const Clock = () => {

const [time, setTime] = useState(new Date())


useEffect(()=>{

  const intervalId = setInterval(()=>{
    setTime(new Date());

  },1000);

  return ()=>{
    clearInterval(intervalId);
  }

}, []);

function formatTime(){
  let hours = time.getHours();
  let minute = time.getMinutes();

  const meridium = hours >= 12 ? "PM" :"AM";

  hours = hours%12 || 12;
  




  return `${padZero(hours)}:${padZero(minute)} ${padZero(meridium)} `



}

function padZero (number){
  return (number < 10  ? "0" : "") + number;
}



  return (
    <div>
        <h1 className='font-bold text-9xl font-sans'>{formatTime()} </h1>
        
    </div>
  )
}

export default Clock