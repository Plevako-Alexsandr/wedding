import "./CountDown.scss"

const CountDown = () => {


  return (
    <section className="count-down">
      <div className="count-down__wrapper container">
        <h2 className="count-down__title">
          Дорогие родные и друзья!
        </h2>
        <span>
          18 дней
        </span>
        <span>
          18 Часов
        </span>
        <span>
          18 Минут
        </span>
        <span>
          18 Секунд
        </span>
      </div>
    </section>
  );
};

export default CountDown;