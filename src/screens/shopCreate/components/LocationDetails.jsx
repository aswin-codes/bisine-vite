import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setArea,
  setCity,
  setFlat,
  setLandmark,
  setPinCode,
  setState,
} from "../../../redux/features/shop";

const LocationDetails = ({ partNo }) => {
  const dispatch = useDispatch();
  const pincode = useSelector((e) => e.shop.pincode);
  const flat = useSelector((e) => e.shop.flat);
  const area = useSelector((e) => e.shop.area);
  const landmark = useSelector((e) => e.shop.landmark);
  const city = useSelector((e) => e.shop.city);
  const state = useSelector((e) => e.shop.state);

  const pincodeError = useSelector((e) => e.shopError.pincodeError);
  const flatError = useSelector((e) => e.shopError.flatError);
  const areaError = useSelector((e) => e.shopError.areaError);
  const landmarkError = useSelector((e) => e.shopError.landmarkError);
  const cityError = useSelector((e) => e.shopError.cityError);
  const stateError = useSelector(e => e.shopError.stateError)

  const handleStateChange = (e) => {
    const selectedValue = e.target.value;
    dispatch(setState(selectedValue))
  };
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div
      className={`${
        partNo == 2 ? "flex" : "hidden"
      } text-black flex-col  gap-2`}
    >
      <h1 className="font-semibold text-xl mb-3">Location</h1>
      <div>
        <label className="text-sm font-semibold block">Pincode</label>
        <input
          value={pincode}
          type="number"
          onChange={(e) => dispatch(setPinCode(e.target.value))}
          placeholder="6 digits [0-9] PIN code"
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50  rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-sm ${
            pincodeError != "" ? "border-red-500" : "border-gray-500"
          }`}
        />
        <p className="text-red-500 text-xs">{pincodeError}</p>
      </div>
      <div>
        <label className="text-sm font-semibold block">
          Flat, House No, Building, Company, Apartment
        </label>
        <input
          value={flat}
          onChange={(e) => dispatch(setFlat(e.target.value))}
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50  rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-sm ${
            flatError != "" ? "border-red-500" : "border-gray-500"
          }`}
        />
        <p className="text-red-500 text-xs">{flatError}</p>
      </div>
      <div>
        <label className="text-sm font-semibold block">
          Area, Street, Sector, Village
        </label>
        <input
          value={area}
          onChange={(e) => dispatch(setArea(e.target.value))}
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50  rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-sm ${
            areaError != "" ? "border-red-500" : "border-gray-500"
          }`}
        />
        <p className="text-red-500 text-xs">{areaError}</p>
      </div>
      <div>
        <label className="text-sm font-semibold block">Landmark</label>
        <input
          value={landmark}
          placeholder="Eg. near apollo hospital"
          onChange={(e) => dispatch(setLandmark(e.target.value))}
          className={`border-2 focus:outline-none focus:ring-0 bg-blue-50  rounded-md md:w-72 w-60 lg:w-96 px-2 py-1 text-sm ${
            landmarkError != "" ? "border-red-500" : "border-gray-500"
          }`}
        />
        <p className="text-red-500 text-xs">{landmarkError}</p>
      </div>
      <div className="flex gap-2  md:w-72 w-60 lg:w-96">
        <div className="w-1/2">
          <label className="text-sm font-semibold block">Town/City</label>
          <input
            value={city}
            placeholder="Eg. near apollo hospital"
            onChange={(e) => dispatch(setCity(e.target.value))}
            className={`border-2 focus:outline-none focus:ring-0 bg-blue-50 w-full  rounded-md px-2 py-1 text-sm ${
              cityError != "" ? "border-red-500" : "border-gray-500"
            }`}
          />
          <p className="text-red-500 text-xs">{cityError}</p>
        </div>
        <div className="w-1/2">
          <label className="text-sm font-semibold block" htmlFor="stateDropdown">State</label>
          <select
            id="stateDropdown"
            value={state}
            onChange={handleStateChange}
            className={`border-2 focus:outline-none focus:ring-0 bg-blue-50 w-full  rounded-md px-2 py-1 text-sm ${
              stateError != "" ? "border-red-500" : "border-gray-500"
            }`}
          >
            <option value="">Select a state...</option>
            {indianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          
        </div>
      </div>
    </div>
  );
};

export default LocationDetails;

