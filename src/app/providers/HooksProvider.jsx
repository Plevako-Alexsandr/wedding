
import { createContext } from "react";

import useRSVP from "@/features/rsvp/model/useRSVP";


export const HooksContext = createContext({});


export const HooksProvider = ({ children }) => {
  const {
    guestName,
    setGuestName,
    quantity,
    handleQuantityChange,
    attendance,
    setAttendance,
    congratulations,
    setCongratulations,
    onSubmitHandler,
    dirtyGuestName,
    setDirtyGuestName,
    guestNameError,
    setGuestNameError,
    onBlurHandler,
    guestPhone,
    setGuestPhone,
    dirtyGuestPhone,
    setDirtyGuestPhone,
    guestPhoneError,
    setGuestPhoneError,
  } = useRSVP();

  return (
    <HooksContext.Provider
      value={{
        guestName,
        setGuestName,
        quantity,
        handleQuantityChange,
        attendance,
        setAttendance,
        congratulations,
        setCongratulations,
        onSubmitHandler,
        dirtyGuestName,
        setDirtyGuestName,
        guestNameError,
        setGuestNameError,
        onBlurHandler,
        guestPhone,
        setGuestPhone,
        dirtyGuestPhone,
        setDirtyGuestPhone,
        guestPhoneError,
        setGuestPhoneError,
      }}
    >
      {children}
    </HooksContext.Provider>
  )
}


