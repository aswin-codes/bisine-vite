import React, { useState } from "react";
import Google from "./google.png";
//import { GoogleLogin , GoogleLogout} from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setProfileUrl } from "../../redux/features/user";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { googleLogout } from "@react-oauth/google";
import axios from "axios";

const clientId =
  "774961232823-b6fmrl6p9tcbhgk19fuv7a6ftbbegcm6.apps.googleusercontent.com";

const LoginButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((e) => e.user.email);
  const [isLoading, setIsLoading] = useState(false);

  const onSuccess = (re) => {
    // console.log(re)
    // console.log("Imaghe", re.picture);
    // console.log("Login Success", re.email);
    localStorage.setItem("email", re.email);
    localStorage.setItem("profileUrl", re.picture);
    dispatch(setEmail(re.email));
    dispatch(setProfileUrl(re.picture));
    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_URL}/user/auth`, { email: re.email })
      .then((res) => {
        setIsLoading(false);
        if (res.status == 200) 
        {
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
        if (error.response && error.response.status === 404) {
          // Handle 404 error (user not found)
          console.log(error.response);
          navigate("/user/register"); // Navigate to signup page or another page
        } else {
          // Handle other errors
          console.error("Error:", error);
          // Handle error response from backend
        }
        // Handle error response from backend
      });
    // axiosInstance.post('user/check/',{
    //   email: re.email
    // }).then(
    //  (res) =>{
    //   console.log(res.data.check)
    //     if (res.data.check == "True"){
    //       //If user is already created account
    //       axiosInstance.post(
    //         'user/token/',{
    //           email:  re.email
    //         }
    //       ).then(res => {
    //         if (res.status == 200){
    //           localStorage.setItem('refresh', res.data.refresh);
    //         localStorage.setItem('access', res.data.access)
    //         navigate('/')
    //         }
    //       })
    //     } else {
    //       //New User
    //       navigate('/profileCreate')
    //     }
    //  })

    //route.push('/profileCreate')
  };

  const onLogOut = () => {
    console.log("Log Out Successful");
  };

  const onFailure = (res) => {
    console.log("Login Failed", res);
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Exchange the authorization code for an access token

        const accessToken = response.access_token;

        // Fetch user info using the access token
        const userInfoResponse = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
        );
         // console.log(userInfoResponse);
        onSuccess(userInfoResponse.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onFailure: (error) => {
      // Handle the error
      console.error(error);
    },
  });
  return (
    <div id="signInButton" className="text-black">
      <button
        onClick={() => login()}
        disabled={isLoading}
        className="flex px-10 py-3 gap-2 bg-sky-300 rounded-lg text-black  items-center transition ease-in-out duration-300 hover:bg-sky-500 disabled:bg-gray-400 font-semibold w-72 justify-center"
      >
        {isLoading? (
          <>
          <p>Loading...</p>
          </>
        ) : (
          <>
            <div>
              <img
                src={Google}
                height={25}
                width={25}
                className="object-contain"
              />
            </div>
            <p>Continue with Google</p>
          </>
        )}
      </button>
    </div>
  );
};

export default LoginButton;
