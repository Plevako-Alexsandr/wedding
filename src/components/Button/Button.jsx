import "./Button.scss"

import clsx from "clsx"

const Button = (props) => {
  const {
    className,
    children,
    type = "button",
    onClick,
  } = props;

  return (
    <button
      className={clsx(className, "button")}
      type={type}  
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;