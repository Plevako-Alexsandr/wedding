import clsx from "clsx";


import { useContext } from "react";
import { HooksContext } from "@/context/HooksProvider";

import Field from "@/components/Field";
import Button from "@/components/Button";

const RSVPForm = (props) => {

  const {
    className
  } = props

  const {
    guestNameHandler,
    guestName,
    setGuestName,
    quantity,
    handleQuantityChange
  } = useContext(HooksContext);


  const onSubmit = (e) => {
    e.preventDefault()

    guestNameHandler()
  }

  const onBlur = (e) => {
    e.preventDefault()

    console.log("On blur");
    
  }


  const attendanceVariants = [
    { title: 'Приду', variant: 'yes' },
    { title: 'Пока не знаю', variant: 'maybe' },
    { title: 'Не смогу', variant: 'no' },
  ];

  return (

    <form
      action=""
      className={clsx("rsvp-form", className)}
      onSubmit={onSubmit}
    >

      <header className="rsvp-form__title">
        Анкета гостя
      </header>

      <div className="rsvp-form__username">
        <p className="rsvp-form__username-title">
          Введите имя:
        </p>
        <Field
          id="guest-name"
          type="text"
          placeholderText="Иванов Иван"
          isLabelHidden
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
        />


      </div>

      <div className="rsvp-form__options">

        <p className="rsvp-form__options-title">
          Сможете ли вы прийти?
        </p>

        <fieldset className="rsvp-form__wrapper">
          <legend className="visually-hidden">Выберите вариант присутствия</legend>

          {attendanceVariants.map((option, index) => {

            return (
              <label key={index} className="rsvp-form__option-title">
                <input
                  type="radio"
                  name="attendance"
                  value={option.variant}
                  className="rsvp-form__option"
                />

                <span className="rsvp-label">{option.title}</span>
              </label>
            )
          })
          }
        </fieldset>

      </div>

      <div className="rsvp-form__quantity">

        <p className="rsvp-form__quantity-title">
          Сколько вас будет?
        </p>

        <Button
          onClick={() => handleQuantityChange(quantity + 1)}
        >
          +
        </Button>
        <span>{quantity}</span>
        <Button
          onClick={() => handleQuantityChange(quantity - 1)}
        >
          -
        </Button>


      </div>

      <Button
        className="rsvp-form__button"
        type="submit"
      >
        Отправить ответ
      </Button>

    </form>
  )


}

export default RSVPForm;