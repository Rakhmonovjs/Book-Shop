import React, { useState } from 'react'
import { useEffect } from 'react';

const Clock = () => {

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    let interval;

    const countDown =() => {
        const destantion = new Date('Feb 5, 2023').getDate();

        interval = setInterval(() => {
            const now = new Date().getTime()
            const different = destantion - now
            const days = Math.floor(different / (1000 * 60* 60 * 24))
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minute = Math.floor(different % (1000 * 60* 60 ) / (1000 * 60))
            const second = Math.floor(different % (1000 * 60) / 1000)

            if(destantion < 0) clearInterval(interval.current)
            else {
                setDays(days)
                setHours(hours)
                setMinute(minute)
                setSecond(second)
            }
        })
    }

    useEffect(() => {
        countDown()
    })


  return (
    <div className='clock_wraper d-flex align-items-center gap-3'>
        <div className='clock_data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{days}</h1>
                <h5 className='text-white fs-6'>Days</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className='clock_data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{hours}</h1>
                <h5 className='text-white fs-6'>Hours</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>

        <div className='clock_data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{minute}</h1>
                <h5 className='text-white fs-6'>Minute</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className='clock_data d-flex align-items-center gap-3'>
            <div className='text-center'>
                <h1 className='text-white fs-3 mb-2'>{second}</h1>
                <h5 className='text-white fs-6'>Second</h5>
            </div>
            <span className='text-white fs-3'></span>
        </div>
    </div>
  )
}

export default Clock