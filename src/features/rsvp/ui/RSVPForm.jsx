import clsx from "clsx";

import "./RSVPForm.scss"

import { useContext } from "react";
import { HooksContext } from "@/app/providers/HooksProvider";

import Field from "@/shared/Field";
import Button from "@/shared/Button";
import TitleStyle from "@/shared/TitleStyle";

const RSVPForm = (props) => {

  const {
    className
  } = props

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
  } = useContext(HooksContext);



  const onBlur = (e) => {
    e.preventDefault()

    onBlurHandler(e)

  }


  const onSubmit = (e) => {
    e.preventDefault()

    onSubmitHandler();
  }

  const attendanceVariants = [
    {
      title: 'Приду',
      variant: 'yes',
    },
    {
      title: 'Пока не знаю',
      variant: 'maybe',
    },
    {
      title: 'Не смогу',
      variant: 'no',
    },
  ];

  return (

    <form
      id="rsvp-form"
      action=""
      className={clsx("rsvp-form", className)}
      onSubmit={onSubmit}
    >

      <div className="rsvp-form__wrapper">
        <header className="rsvp-form__header">
          <h2 className="rsvp-form__title">Анкета гостя</h2>
          <h3 className="rsvp-form__subtitle">
            Подтвердите присутствие до 12 августа
          </h3>
        </header>



        <div className="rsvp-form__user">
          <TitleStyle
            className="rsvp-form__user-title>"
            titleMode="default"
          >
            Введите имя:
          </TitleStyle>

          {(dirtyGuestName && guestNameError) && <div style={{ color: 'red' }}> {guestNameError}</div>}
          <Field
            id="guest-name"
            name="guest-name"
            type="text"
            placeholderText="Иванов Иван"
            isLabelHidden
            // isInputRequired="true"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            onBlur={(e) => onBlur(e)}
          />


        </div>

        <div className="rsvp-form__phone">

          <TitleStyle
            className="rsvp-form__phone-title>"
            titleMode="default"
          >
            Введите номер телефона:
          </TitleStyle>

          {(dirtyGuestPhone && guestPhoneError) && <div style={{ color: 'red' }}> {guestPhoneError}</div>}
          <Field
            id="guest-phone"
            name="guest-phone"
            type="tel"
            placeholderText="+7 (xxx) xxx-xx-xx"
            isLabelHidden
            value={guestPhone}
            onChange={(e) => setGuestPhone(e.target.value)}
            onBlur={(e) => onBlur(e)}
          />


        </div>

        <div className="rsvp-form__attendance">

          <TitleStyle
            className="rsvp-form__attendance-title>"
            titleMode="default"
          >
            Сможете ли вы прийти?
          </TitleStyle>

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
            <TitleStyle
              className="rsvp-form__quantity-title>"
              titleMode="default"
            >
              Сколько вас будет?
            </TitleStyle>

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
          <TitleStyle
            className="rsvp-form__congratulations-title>"
            titleMode="default"
          >
            Комментарий / пожелания
          </TitleStyle>

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
          buttonMode="default"
        >
          Отправить ответ
        </Button>
      </div>

    </form>
  )


}

export default RSVPForm;