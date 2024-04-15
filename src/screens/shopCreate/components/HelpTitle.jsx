import React from 'react'

const HelpTitle = ({partNo}) => {
  return (
    <div className='text-black font-semibold text-xl md:text-3xl'>
        <p>
            {
                partNo <= 2 ?
                "Ready to sell? Let's get started!"
                :
                "Almost done"
            }
        </p>
    </div>
  )
}

export default HelpTitle