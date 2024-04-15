
import { useState } from "react";
import AddAddressForm from "./AddAddressForm";
import OldAddress from "./OldAddress";

const AddressForm = ({setIndex}) => {
  
    const [isNew, setIsNew] = useState(false)

    const setNewTrue = () => {
        setIsNew(true)
    }

    const setNewFalse = () => {
        setIsNew(false)
    }
  

  return (
    <div className="h-full py-2">
      {
        isNew ? <AddAddressForm setNewFalse={setNewFalse}/> : <OldAddress setIndex={setIndex} setNewTrue={setNewTrue}/>
      }
    </div>
  );
};

export default AddressForm;
