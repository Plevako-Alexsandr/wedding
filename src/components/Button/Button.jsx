import "./Button.scss"

import clsx from "clsx"

const Button = (props) => {
  const {
    className,
    children
  } = props;

  return (
    <button className={clsx(className, "button")}>
      {children}
    </button>
  );
};

export default Button;