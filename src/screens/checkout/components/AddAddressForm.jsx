import React, { useState } from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import axiosInstance from "../../../axios";
import { data } from "autoprefixer";
import toast from "react-hot-toast";

const AddAddressForm = ({ setNewFalse }) => {
  const [pincode, setPincode] = useState("");
  const [flat, setHouse] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const [pincodeError, setPincodeError] = useState("");
  const [flatError, setHouseError] = useState("");
  const [areaError, setAreaError] = useState("");
  const [landmarkError, setLandmarkError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");

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

  const handleSubmit = async () => {
    let isValid = true;

    // Validate pincode
    if (!pincode.trim()) {
      setPincodeError("Pincode is required");
      isValid = false;
    } else if (pincode.toString().length != 6) {
      setPincodeError("Pincode must be 6 digits");
    } else {
      setPincodeError("");
    }

    // Validate flat
    if (!flat.trim()) {
      setHouseError("House number/building is required");
      isValid = false;
    } else {
      setHouseError("");
    }

    // Validate area
    if (!area.trim()) {
      setAreaError("Area is required");
      isValid = false;
    } else {
      setAreaError("");
    }

    // Validate city
    if (!city.trim()) {
      setCityError("City is required");
      isValid = false;
    } else {
      setCityError("");
    }

    // Validate state
    if (!state.trim()) {
      setStateError("State is required");
      isValid = false;
    } else {
      setStateError("");
    }

    // Submit the form if all fields are valid
    if (isValid) {
      // Perform form submission logic here
      console.log(pincode, flat, area, landmark, city, state);
      const id = JSON.parse(localStorage.getItem("user")).id;
      const response = await axiosInstance.post("/user/addresses", {
        user_id: id,
        flat,
        pincode,
        area,
        landmark,
        city,
        state,
      });
      if (response.status == 201){
        toast.success(response.data.message)
        setNewFalse();
      }
      else {
        toast.error(response.data.message)
      }
      //setNewFalse();
    }
  };

  return (
    <>
      <h1 className="font-semibold py-4">Add Address</h1>
      <Input
        type="number"
        color="default"
        placeholder="Pincode (Required)"
        className="my-2"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />
      {pincodeError && (
        <div className="text-red-500 text-xs">{pincodeError}</div>
      )}

      <Input
        color="default"
        placeholder="House no, Building (Required)"
        className="my-2"
        value={flat}
        onChange={(e) => setHouse(e.target.value)}
      />
      {flatError && <div className="text-red-500 text-xs">{flatError}</div>}

      <Input
        color="default"
        placeholder="Area (Required)"
        className="my-2"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
      {areaError && <div className="text-red-500 text-xs">{areaError}</div>}

      <Input
        color="default"
        placeholder="Landmark"
        className="my-2"
        value={landmark}
        onChange={(e) => setLandmark(e.target.value)}
      />
      {landmarkError && (
        <div className="text-red-500 text-xs">{landmarkError}</div>
      )}

      <div className="flex my-2 items-center gap-2">
        <div className="w-full">
          <Input
            color="default"
            placeholder="City"
            className=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {cityError && <div className="text-red-500 text-xs">{cityError}</div>}
        </div>
        <div className="w-full">
          <Select
            onSelectionChange={(e) => setState(e.currentKey)}
            size="sm"
            label="State"
            className="w-full "
          >
            {indianStates.map((state) => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </Select>
          {stateError && (
            <div className="text-red-500 text-xs">{stateError}</div>
          )}
        </div>
      </div>

      <div className="mt-10 flex-col md:flex-row flex gap-2">
        <Button
          onClick={handleSubmit}
          color="primary"
          className="font-semibold w-full"
        >
          Save Address
        </Button>
        <Button color="danger" className="w-full" onClick={() => setNewFalse()}>
          Cancel
        </Button>
      </div>
    </>
  );
};

export default AddAddressForm;
