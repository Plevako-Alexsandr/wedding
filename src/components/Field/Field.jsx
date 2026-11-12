import clsx from 'clsx';


import "./Field.scss"





const Field = (props) => {


  const {
    className,
    id,
    name,
    placeholderText = "",
    isLabelHidden,
    isInputRequired = false,
    type,
    children,
    value,
    onChange,
    onBlur
  } = props


  return (
    <div className="field">
      <label
        className={clsx(
          className,
          "field__label", 
          isLabelHidden ? "visually-hidden" : null
        )}
        htmlFor={id}
      >
        {children}
      </label>
      <input
        className="field__input"
        id={id}
        name={name}
        placeholder={placeholderText}
        type={type}
        required={isInputRequired}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>

  )

}

export default Field;


