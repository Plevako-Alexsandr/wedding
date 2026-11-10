
import { createContext } from "react";

import useRSVP from "@/hooks/useRSVP";


export const HooksContext = createContext({});


export const HooksProvider = ({ children }) => {
  const {
    quantity,
    guestNameHandler,
    guestName,
    setGuestName,
    handleQuantityChange,
    attendance,
    setAttendance,
    congratulations,
    setCongratulations,
    onSubmitHundler
  } = useRSVP();

  return (
    <HooksContext.Provider
      value={{
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
      }}
    >
      {children}
    </HooksContext.Provider>
  )
}


