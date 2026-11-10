import clsx from "clsx";

import "./RSVPForm.scss"

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
    handleQuantityChange,
    attendance,
    setAttendance,
    congratulations,
    setCongratulations,
    onSubmitHundler
  } = useContext(HooksContext);


  const onSubmit = (e) => {
    e.preventDefault()

    onSubmitHundler();
  }

  const onBlur = (e) => {
    e.preventDefault()

    console.log("On blur");

  }


  const attendanceVariants = [
    {
      title: 'Приду',
      variant: 'yes',
      isChecked: true,
    },
    {
      title: 'Пока не знаю',
      variant: 'maybe',
      isChecked: false,
    },
    {
      title: 'Не смогу',
      variant: 'no',
      isChecked: false
    },
  ];

  return (

    <form
      id="RSVPForm"
      action=""
      className={clsx("rsvp-form", className)}
      onSubmit={onSubmit}
    >

      <div className="rsvp-form__wrapper">
        <header className="rsvp-form__header">
          <h2 className="rsvp-form__title">Анкета гостя</h2>

        </header>

        <h3 className="rsvp-form__subtitle">
          Подтвердите присутствие до 12 августа
        </h3>

        <div className="rsvp-form__username">
          <p className="rsvp-form__username-title title-style">
            Введите имя:
          </p>
          <Field
            id="guest-name"
            type="text"
            placeholderText="Иванов Иван"
            isLabelHidden
            // isInputRequired="true"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />


        </div>

        <div className="rsvp-form__attendance">

          <p className="rsvp-form__attendance-title title-style">
            Сможете ли вы прийти?
          </p>

          <fieldset className="rsvp-form__attendance-list">
            <legend className="visually-hidden">Выберите вариант присутствия</legend>

            {attendanceVariants.map((option, index) => { 

              return (
                <label key={index} className="rsvp-form__attendance-item">
                  <input
                    className="rsvp-form__attendance-radio"
                    type="radio"
                    name="attendance-item"
                    checked={attendance === option.variant}
                    value={option.variant}
                    onChange={(e) => setAttendance(e.target.value)}
                  />

                  <span className="rsvp-form__attendance-option">{option.title}</span>
                </label>
              )
            })
            }
          </fieldset>

        </div>

        <div className="rsvp-form__quantity">

          <div className="rsvp-form__quantity-wrapper">
            <p className="rsvp-form__quantity-title title-style">
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


        </div>

        <div className="rsvp-form__congratulations">
          <p className="rsvp-form__congratulations-title title-style">
            Комментарий / пожелания
          </p>

          <textarea
            className="rsvp-form__congratulations-textarea"
            name="rsvp-form__congratulations-textarea"
            id="rsvp-form-textarea"
            placeholder="Любые пожелания..."
            rows={3}
            value={congratulations}
            onChange={(e) => setCongratulations(e.target.value)}
          >

          </textarea>


        </div>


        <Button
          className="rsvp-form__button"
          type="submit"
        >
          Отправить ответ
        </Button>
      </div>

    </form>
  )


}

export default RSVPForm;