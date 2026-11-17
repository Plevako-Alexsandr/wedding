import "./Button.scss"

import clsx from "clsx"

const Button = (props) => {

  const {
    className,
    children,
    type = "button",
    onClick,
    buttonMode = "default"
  } = props;

  const buttonMods = {
    "default": "button--mode-default",
  }

  const modeClass = buttonMods[buttonMode] ?? buttonMods["default"]


  return (
    <button
      className={clsx("button", modeClass, className)}
      type={type}  
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;