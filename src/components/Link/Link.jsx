import "./Link.scss"

import clsx from "clsx"

const Link = (props) => {
  const {
    className,
    href,
    children,
  } = props;

  return (
    <a href={href} className={clsx("link", className)}>
      {children}
    </a>
  );
};

export default Link;