

import { useState } from "react";



const useRSVP = () => {


  const [guestName, setGuestName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [attendance, setAttendance] = useState(null);
  const [congratulations, setCongratulations] = useState("");

  const guestNameHandler = () => {


    if (guestName.trim().length === 0) {
      alert("Please enter a valid name.");
      return;
    }
  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 1) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
  }


  const onSubmitHundler = () => {
    console.log(guestName, attendance, quantity, congratulations);

  }

  return {
    guestNameHandler,
    guestName,
    setGuestName,
    quantity,
    handleQuantityChange,
    attendance,
    setAttendance,
    congratulations,
    setCongratulations,
    onSubmitHundler
  };
};


export default useRSVP;









