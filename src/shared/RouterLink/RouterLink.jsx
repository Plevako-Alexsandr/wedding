import { Link } from "react-router-dom"
import clsx from "clsx"
import "./RouterLink.scss"

const RouterLink = (props) => {
  const {
    className,
    to,
    children,
  } = props;

  return (
    <Link to={to} className={clsx("link", className)}>
      {children}
    </Link>
  );
};

export default RouterLink;