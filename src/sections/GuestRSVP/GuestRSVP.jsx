import Field from "@/components/Field";




const GuestRSVP = () => {
  return (
    <section className="guest-rsvp">
      <div className="guest-rsvp__wrapper container">
        <form action="" className="guest-rsvp__form">
          <h2 className="guest-rsvp__title">
            Анкета гостя
          </h2>

          <div className="guest-rsvp__data">

            <Field
              id="guest-name"
              type="text"
              placeholderText="Иванов Иван"
              isLabelHidden
            />


          </div>

          <div className="guest-rsvp__email">
            <Field
              id="guest-choice"
              type="checkbox"
              placeholderText="Имя"
              isLabelHidden={false}
            >
              <p>Имя Фамилия</p>

            </Field>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GuestRSVP;