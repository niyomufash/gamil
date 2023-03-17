import React from 'react'
import './email.css'

const Email = ({expeditor, messageTitle, message, timestamp}) => {
  return (
    
      <div className='aaaaa'>
        <a href=''>
    
      
      <div className='ema flex justify-between border-b pb-3 pt-1 px-6 '>

     <div className='flex lightcon'>
     <svg className='checkbox ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg> 
      <p className='w-[7rem] font-bold '>{expeditor}</p>
     
     </div>
      
      
      
      <div className='flex items-center max-w-[30rem] truncate '>
      <p className='font-semibold truncate'>{messageTitle} -</p>
      <p className='pl-1 text-gray-500 truncate'>{message}</p>
      </div>
      <p className='text-gray-500 w-[8rem] text-end '>{timestamp}</p>
    </div>
    </a>
      </div>
    
  )
}

export default Email;
