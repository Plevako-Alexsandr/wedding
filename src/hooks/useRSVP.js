
import { useState } from "react";



const useRSVP = () => {


  const [quantity, setQuantity] = useState(0);
  const [guestName, setGuestName] = useState("");


  const guestNameHandler = () => {

    console.log("Guest Name:", guestName);

    if (guestName.trim() === "") {
      console.log("Please enter a valid name.");
      return;
    }
    
    // Настроить
    if (guestName.indexOf(Number)) {
      alert("Please enter a valid name.");
      return;
    }

  }

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 0) {
      newQuantity = 0;
    }
    setQuantity(newQuantity);
  }

  return {
    guestNameHandler,
    guestName,
    setGuestName,
    quantity,
    handleQuantityChange,
  };
};


export default useRSVP;









