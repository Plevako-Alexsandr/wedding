import "./Greeting.scss"

const Greeting = () => {


  return (
    <section className="greeting">
      <div className="greeting__wrapper container">
        <header className="greeting__title">
          Дорогие родные и друзья!
        </header>
        <p className="greeting__description">
          В нашей жизни предстоит очень важное и радостное событие — наша свадьба! Мы будем счастливы разделить этот особенный день с вами.
        </p>
      </div>
    </section>
  );
};

export default Greeting;