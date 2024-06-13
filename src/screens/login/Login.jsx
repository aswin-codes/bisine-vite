import {useEffect, useState} from 'react'
import Vector from './vector.png'
import axios from 'axios'
//import { gapi } from 'gapi-script'
import LoginButton from './LoginButton'
import { Button, Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const clientId = "774961232823-b6fmrl6p9tcbhgk19fuv7a6ftbbegcm6.apps.googleusercontent.com"
const LoginSide = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    const reqBody = {username,password}
    setIsLoading(true);
    axios
      .post(`https://bisinenode.vercel.app/api/user/test`, reqBody)
      .then((res) => {
        setIsLoading(false);
        if (res.status == 200) 
        {
          localStorage.setItem("profileUrl","https://lh3.googleusercontent.com/a/ACg8ocIgBcCyKE3AVVCFsxL6b3vJlmB-iQBB11VEx_x4G9gATgAeZw=s96-c")
          console.log(res.data)
          const { user, access_token,shop } = res.data;
          // You can handle the response accordingly, such as storing user details or token in local storage
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("shop",JSON.stringify(shop))
          localStorage.setItem("access_token", access_token);
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          // Handle 404 error (user not found)
         localStorage.clear()
         toast.error("Invalid credentials");
         setIsLoading(false);
           // Navigate to signup page or another page
        } else {
          // Handle other errors
          console.error("Error:", error);
          // Handle error response from backend
        }
        // Handle error response from backend
      });
    
  }
  
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
        {/* <div className='flex flex-col gap-3 w-72 mb-5'>
          <Input value={username} onValueChange={(e) => setUsername(e)} label="username" color='primary' />
          <Input value={password} onValueChange={(e) => setPassword(e)} label="password" color='primary' type='password' />
          <Button onClick={handleLogin} color='primary' isLoading={isLoading} className='font-semibold'>Login</Button>
        </div> */}
        <LoginButton/>
    </div>
  )
}

export default LoginSide