
import Field from "@/components/Field";
import clsx from "clsx";


const RSVPForm = (props) => {

  const {
    className
  } = props


  const attendanceVariants = [
    { title: 'Приду', variant: 'yes' },
    { title: 'Пока не знаю', variant: 'maybe' },
    { title: 'Не смогу', variant: 'no' },
  ];

  return (

    <form action="" className={clsx("rsvp-form", className)}>
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


    </form>
  )


}

export default RSVPForm;