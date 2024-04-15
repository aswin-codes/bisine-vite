import {useEffect} from 'react'
import Vector from './vector.png'
//import { gapi } from 'gapi-script'
import LoginButton from './LoginButton'

const clientId = "774961232823-b6fmrl6p9tcbhgk19fuv7a6ftbbegcm6.apps.googleusercontent.com"
const LoginSide = () => {
  
  
  //Old version
  // useEffect(()=>{
  //   function start(){
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: ""
  //     })
  //   };

  //   gapi.load('client:auth2',start);
  // })
  return (
    <div className=' flex-1 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold text-black'>Get Started</h1>
        <div>
            <img src={Vector} className='object-contain h-64 lg:h-96'/>
        </div>
        <LoginButton/>
    </div>
  )
}

export default LoginSide