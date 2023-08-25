import React, { useState, useEffect } from 'react';
import Campfire from '/src/assets/campfire.png'


function JogjaTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedTime = currentTime.toLocaleTimeString('en-US', options);
  
    return (
        <div className='flex justify-between'>
            <div className='mt-3'>
                <p className='font-Poppins font-semibold text-xl tracking-wide'>{formattedTime}</p>
            </div>
            <img className='w-[140px]' src={Campfire} alt="campfire" />
        </div>
    );
  };

export default JogjaTime
