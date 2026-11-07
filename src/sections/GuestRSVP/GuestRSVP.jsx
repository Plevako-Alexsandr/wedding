
import RSVPForm from "@/components/RSVPForm";




const GuestRSVP = () => {


  return (
    <section className="guest-rsvp">
      <div className="guest-rsvp__wrapper container">
        <RSVPForm
          className="guest-rsvp__form"
        />
      </div>
    </section>
  );
};

export default GuestRSVP;