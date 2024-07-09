import React from 'react'

const EventCard = ({time,period, title, description}) => {
  return (
    <div className='w-full flex bg-gray-500/20 border-l-4 border-primary p-2 gap-2 md:gap-6'>
      <div className='flex flex-col justify-center items-center text-xl md:text-2xl px-2'>
        <span className='text-zinc-100 tracking-widest'>{time}</span>
        <span className='text-zinc-300 font-semibold'>{period}</span>
      </div>
      <div className='flex flex-col text-white'>
        <span className='text-xl md:text-2xl font-semibold'>{title}</span>
        <span className='text-md font-light md:text-lg'>{description}</span>
      </div>
    </div>
  )
}

export default EventCard
