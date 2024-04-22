import { CircularProgress } from '@nextui-org/react'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-40 w-full flex justify-center items-center'>
        <CircularProgress/>
    </div>
  )
}

export default Loading