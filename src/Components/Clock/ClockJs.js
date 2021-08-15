import React, { useState,useEffect } from 'react'

export const ClockJs = () => {
    const [hour, setTime] = useState();

    useEffect(() => {
       setInterval(() => {
           setTime(new Date().toLocaleTimeString())
       }, 1000);
     
    }, [hour])
   
    return (
        <div>
            <h1>{hour}</h1>
        </div>
    )
}
export default ClockJs