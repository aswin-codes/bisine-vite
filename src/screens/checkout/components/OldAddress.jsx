import React, { useEffect, useState } from "react";
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { setAllAddresses, setDeliveryAddress } from "../../../redux/features/checkout";
import { useSelector } from "react-redux";
import axiosInstance from "../../../axios";

const OldAddress = ({ setNewTrue, setIndex }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const allAddresses = useSelector(e => e.checkout.allAddresses)
  const dispatch = useDispatch();

  //Function to fetch all the address of the particular user using user_id
  const fetchAllAddresses = async () => {
    const userId = JSON.parse(localStorage.getItem("user")).id
    const response = await axiosInstance(`/user/${userId}/addresses`)
    dispatch(setAllAddresses(response.data.addresses))
    console.log(response)
  }

  useEffect(() => {
    fetchAllAddresses()
  }, []);

 

  const handleSubmit = () => {
    if (selectedAddress !== null) {
      dispatch(
        setDeliveryAddress(allAddresses.find((e) => e.id == selectedAddress))
      );
      setIndex(2);
    } else {
      alert("Please select an address");
    }
  };

  return (
    <>
      <div
        onClick={setNewTrue}
        className="bg-white px-4 py-2 flex items-center text-blue-700 font-semibold gap-2 cursor-pointer"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
        <span>Add a new address</span>
      </div>
      <div className="bg-white my-2">
        <RadioGroup
          className="px-2"
          onValueChange={(e) => setSelectedAddress(e)}
          value={selectedAddress}
        >
          {allAddresses.map((address, index) => (
            <Radio key={address.id} className="w-full my-2" value={address.id}>
              <div>
                <p>{address.flat}</p>
                <p>{address.area}</p>
                <p>
                  {address.city}, {address.state}, {address.pincode}
                </p>
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
      <Button
        onClick={handleSubmit}
        color="primary"
        className="font-semibold w-full my-10 text-lg"
      >
        Deliver Here
      </Button>
    </>
  );
};

export default OldAddress;
