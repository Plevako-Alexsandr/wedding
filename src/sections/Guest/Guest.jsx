
import RSVPForm from "@/components/RSVPForm";




const Guest = () => {


  return (
    <section className="guest">
      <div className="guest__wrapper container">
        <RSVPForm
          className="guest__rsvp-form"
        />
      </div>
    </section>
  );
};

export default Guest;