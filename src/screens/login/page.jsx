import React from 'react'
import InfoSlide from '../../CommonComponets/InfoSlide'
import LoginSide from './Login'

const LoginPage = () => {
  return (
    <main className='h-screen bg-blue-50 flex p-4'>
        <InfoSlide/>
        <LoginSide/>
    </main>
  )
}

export default LoginPage