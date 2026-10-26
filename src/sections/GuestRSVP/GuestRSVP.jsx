import Field from "@/components/Field";




const GuestRSVP = () => {



  return (
    <section className="guest-rsvp">
      <div className="guest-rsvp__wrapper container">
        <form action="" className="guest-rsvp__form">
          <h2 className="guest-rsvp__title">
            Анкета гостя
          </h2>

          <div className="guest-rsvp__username">
            <p className="guest-rsvp__username-title">
              Введите имя:
            </p>
            <Field
              id="guest-name"
              type="text"
              placeholderText="Иванов Иван"
              isLabelHidden
            />


          </div>

          <div className="guest-rsvp__options">

            <p className="guest-rsvp__options-title">
              Сможете ли вы прийти?
            </p>

            <fieldset className="guest-rsvp__rsvp-options">
              <legend className="visually-hidden">Выберите вариант присутствия</legend>

              {['Да', 'Пока не знаю', 'Нет'].map((label, idx) => (
                <label key={idx} className="rsvp-option">
                  <input
                    type="radio"
                    name="attendance"         
                    value={['yes', 'maybe', 'no'][idx]}
                    className="rsvp-radio"
                  />
                  <span className="rsvp-label">{label}</span>
                </label>
              ))}
            </fieldset>

          </div>


        </form>
      </div>
    </section>
  );
};

export default GuestRSVP;