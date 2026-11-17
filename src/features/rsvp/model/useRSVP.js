

import { useState } from "react";



const useRSVP = () => {


  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const [dirtyGuestName, setDirtyGuestName] = useState(false)
  const [guestNameError, setGuestNameError] = useState(null)

  const [dirtyGuestPhone, setDirtyGuestPhone] = useState(false)
  const [guestPhoneError, setGuestPhoneError] = useState(null)


  const [quantity, setQuantity] = useState(1);
  const [attendance, setAttendance] = useState(null);
  const [congratulations, setCongratulations] = useState("");

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      return
    }
    setQuantity(newQuantity);
  }


  const validateGuestName = (value) => {
    const trimmed = value.trim();

    if (trimmed.length === 0) {
      return "Поле не может быть пустым";
    }

    const words = trimmed.split(/\s+/);

    if (words.length < 2) {
      return "Укажите имя и фамилию через пробел (Отчество опционально)";
    }

    if (words.length > 3) {
      return "Укажите не более 3 слов (фамилия, имя, отчество)";
    }

    if (words.some((word) => !/^[а-яёa-z-]+$/i.test(word))) {
      return "Имя может содержать только буквы и дефис";
    }

    return null;
  };

  const normalizePhone = (value) => {
    const digits = value.replace(/\D/g, "");

    // 11 цифр, начинающихся с 8 или 7 — приводим к виду 7XXXXXXXXXX
    if (digits.length === 11 && (digits.startsWith("8") || digits.startsWith("7"))) {
      return "7" + digits.slice(1);
    }

    // 10 цифр без кода страны — добавляем 7.
    // Исключаем случай, когда 8 — это ещё не дописанный код страны
    if (digits.length === 10 && !digits.startsWith("8")) {
      return "7" + digits;
    }

    return digits;
  };

  const validateGuestPhone = (value) => {
    if (value.trim().length === 0) {
      return "Поле не может быть пустым";
    }

    const digits = normalizePhone(value);

    if (digits.length !== 11 || !/^7[3489]\d{9}$/.test(digits)) {
      return "Введите номер в формате +7 XXX XXX-XX-XX";
    }

    return null;
  };




  const onBlurHandler = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "guest-name": {
        setDirtyGuestName(true);
        setGuestNameError(validateGuestName(value));
        break;
      }
      case "guest-phone": {
        setDirtyGuestPhone(true);
        setGuestPhoneError(validateGuestPhone(value));
        break;
      }

      default:
        break;
    }
  };


  const onSubmitHandler = () => {




    const error = validateGuestName(guestName);

    if (error) {
      setDirtyGuestName(true);
      setGuestNameError(error);
      return;
    }

    const cleanName = guestName.replace(/\s+/g, " ").trim();
    console.log("Отправляем:", cleanName);
  };

  return {
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
  };
};


export default useRSVP;









