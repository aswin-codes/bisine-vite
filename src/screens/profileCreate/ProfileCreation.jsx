import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullName, setPhoneNumber } from "../../redux/features/user";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import axios from "axios";

const ProfileCreation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((e) => e.user.email);
  const phoneNumber = useSelector((event) => event.user.phoneNumber);
  const fullName = useSelector((event) => event.user.fullName);

  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsError(null)
    setErrorMsg('')
  }, [isChecked, phoneNumber, fullName]);

  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }

  const onSubmit = (e) => {
    
    e.preventDefault();

    if (fullName == ''){
      setErrorMsg("Kindly, enter your user name");
      setIsError(true)
    }

    else if (phoneNumber == '' || !isValidPhoneNumber(phoneNumber)){
      setErrorMsg('Kindly, enter your phone number');
      setIsError(true)
    }

    else if (isChecked){
      setIsError(null)
      setIsLoading(true);
      axios.post(`${import.meta.env.VITE_API_URL}/user/register`, {
        email : localStorage.getItem('email'),
        fullName: fullName,
        profileURL: localStorage.getItem('profileUrl'),
        phoneNumber: phoneNumber
      }).then((res) => {
        setIsLoading(false);
        if (res.status == 201) {
          const {access_token,user,shop} = res.data;
          localStorage.setItem("shop",JSON.stringify(shop))
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("access_token",access_token);
          navigate("/");
        }
      }).catch(error => {
        if (error.response && error.response.status === 409) {
          // Handle 409 error (user already created)
          console.log(error.response);
          alert("You already have created an account with this email.");
          navigate("/"); // Navigate to signup page or another page
        }
        console.log(err);
      })
    } else {
      setErrorMsg('To create an account, you should accept terms and conditions');
      setIsError(true);
      
    }
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center text-black gap-5">
      <h1 className="font-semibold text-2xl">Register your account</h1>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex flex-col items-center gap-4 mt-10"
      >
        <div>
          <p className="font-semibold text-md">Full Name</p>
          <input
            value={fullName}
            onChange={(e) => dispatch(setFullName(e.target.value))}
            type="text"
            placeholder="Aswin Raaj"
            className="border-2 bg-blue-50 border-gray-500 rounded-md w-60 lg:w-96 px-2 py-1 text-lg"
          />
        </div>
        <div>
          <p className="font-semibold text-md">Phone Number</p>
          <input
            value={phoneNumber}
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
            type="text"
            placeholder="1234567890"
            className="border-2 bg-blue-50 border-gray-500 rounded-md w-60 lg:w-96 px-2 py-1 text-lg"
          />
        </div>
        <div className="flex gap-5 items-center mt-16 w-60 lg:w-96">
          <input
            value={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            type="checkbox"
            className="bg-blue-50"
          />
          <label className="text-xs">
            By creating an account, you are agreeing to our{" "}
            <span className="underline text-blue-700">
              Terms and conditions
            </span>
          </label>
        </div>
        {
          isError && 
          <div className="bg-red-200 pl-2 pr-4 gap-2 w-60 lg:w-96 text-xs py-2 rounded-lg flex text-red-700">
          <button className="h-8 w-8 " onClick={()=> setIsError(null)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-red-800 object-contain"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          </button>

          <p>{errorMsg}</p>
        </div>
        }
        <button
          disabled={isLoading}
          type="submit"
          className="rounded-lg bg-blue-500 py-2 w-60 lg:w-96 mt-2 disabled:bg-gray-400"
        >
         {isLoading ? "Loading" : "Create Account"}
        </button>
      </form>
    </div>
  );
};

export default ProfileCreation;
