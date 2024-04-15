import React, { useEffect, useState } from "react";
import NavBar from "../../CommonComponets/NavBar";
import ProgressBar from "./components/Progress";
import AddressForm from "./components/AddressFrom";
import Summary from "./components/Summary";
import PaymentComponent from "./components/PaymentComponent";

function CheckoutPage() {

  const [ index, setIndex] = useState(1);

  

  return (
    <section className="min-h-screen bg-blue-50">
      <NavBar isSearchVisible={true} />
      <div className=" px-2 sm:px-8 pt-20 w-full justify-center flex">
        <div className="max-w-xl w-full  ">
          <ProgressBar index={index} />
          {index == 1 && <AddressForm setIndex={setIndex}/>}
          {index == 2 && <Summary setIndex={setIndex}/>}
          {index == 3 && <PaymentComponent setIndex={setIndex}/>}
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
