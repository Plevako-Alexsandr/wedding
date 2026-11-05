
import Button from "@/components/Button";
import RSVPForm from "@/components/RSVPForm";




const GuestRSVP = () => {


  return (
    <section className="guest-rsvp">
      <div className="guest-rsvp__wrapper container">
      <RSVPForm 
        className="guest-rsvp__form"
      />
      <Button>
        Отправить ответ
      </Button>
      </div>
    </section>
  );
};

export default GuestRSVP;