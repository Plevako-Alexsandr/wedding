import "./Button.scss"

import clsx from "clsx"

const Button = (props) => {
  const {
    className
  } = props;

  return (
    <button className={clsx(className, "button")}>
      Нажми на меня
    </button>
  );
};

export default Button;