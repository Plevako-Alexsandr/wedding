import "./Hero.scss"

import Field from "@/components/Field";
import Button from "@/components/Button";

const Hero = () => {


  return (
    <section className="hero container">
      <h1>Hero Section</h1>
      <Field
        id="hero-input"
        type="text"
        placeholder="Введите текст"
        isLabelHidden
      >
      </Field>
      <Button>Click me</Button>
    </section>
  );
};

export default Hero;