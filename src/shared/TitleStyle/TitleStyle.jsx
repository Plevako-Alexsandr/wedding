import "./TitleStyle.scss"

import clsx from "clsx"

const TitleStyle = (props) => {
  const {
    className,
    titleMode,
    children
  } = props;

  const titleMods = {
    "default": "title-style--mode-default",
  }

  const modeClass = titleMods[titleMode] ?? titleMods["default"]

  return (
    <p className={clsx("title-style", modeClass, className)}>
      {children}
    </p>
  );
};

export default TitleStyle;