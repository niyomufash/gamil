import React from 'react'

const Email = ({expeditor, messageTitle, message, timestamp}) => {
  return (
    <div className='flex justify-between border-b pb-1 pt-1 px-6'>
      <p className='w-[8rem] font-bold'>{expeditor}</p>
      
      <div className='flex items-center max-w-[30rem] truncate'>
      <p className='font-semibold truncate'>{messageTitle} -</p>
      <p className='pl-1 text-gray-500 truncate'>{message}</p>
      </div>
      <p className='text-gray-500 w-[8rem] text-end '>{timestamp}</p>
    </div> 
  )
}

export default Email;
