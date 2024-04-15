import React from 'react'

const ProgressBar = ({partNo}) => {
  return (
    <div className='flex mb-8 mt-2 w-full'>
        <div className={`${partNo >=1 ? 'bg-blue-600' : 'bg-gray-400' } h-1.5 flex-1 rounded-lg mx-2`}></div>
        <div className={`${partNo >=2 ? 'bg-blue-600' : 'bg-gray-400' } h-1.5 flex-1 rounded-lg mx-2`}></div>
        <div className={`${partNo >=3 ? 'bg-blue-600' : 'bg-gray-400' } h-1.5 flex-1 rounded-lg mx-2`}></div>
        <div className={`${partNo >=4 ? 'bg-blue-600' : 'bg-gray-400' } h-1.5 flex-1 rounded-lg mx-2`}></div>
    </div>
  )
}

export default ProgressBar