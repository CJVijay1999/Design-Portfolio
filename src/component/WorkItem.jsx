import React from 'react'

const Workitem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col relative border-l border-stone-200'>
      <li className='mb-10 ml-4 '>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
        <p className='flex flex-wrap flex-row gap-4 justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold bg-[#134B70] text-white rounded-md'>{year}</span>
          <span className='font-semibold text-lg text-[#134B70]'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-slate-400'>{duration}</span>
        </p>
        <p className='my-2 font-normal text-stone-500'>{details}</p>
      </li>
    </ol>
  )
}

export default Workitem