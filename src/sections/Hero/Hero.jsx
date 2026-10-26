import Button from "@/components/Button";
import "./Hero.scss"

const Hero = () => {


  return (
    <section className="hero">
      <div className="hero__wrapper container">
        <h1 className="hero__title">
          Сайт-приглашение на свадьбу — готов за один вечер
        </h1>
        <p className="hero__description">
          Сделайте приглашение на свадьбу онлайн: ваши фото и музыка в одной красивой ссылке для всех гостей. Начните бесплатно, а анкету и карту добавьте, когда будете готовы
        </p>
        <Button>
          Создать
        </Button>
      </div>
    </section>
  );
};

export default Hero;