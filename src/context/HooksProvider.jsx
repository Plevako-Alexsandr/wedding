
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
  } = useRSVP();

  return (
    <HooksContext.Provider
      value={{
        guestNameHandler,
        guestName,
        setGuestName,
        quantity,
        handleQuantityChange,
      }}
    >
      {children}
    </HooksContext.Provider>
  )
}


