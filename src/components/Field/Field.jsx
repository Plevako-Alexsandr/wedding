import clsx from 'clsx';


import "./Field.scss"





const Field = (props) => {


  const {
    id,
    placeholderText,
    isLabelHidden,
    // type,
    children,
    // value,
    // onChange
  } = props


  return (
    <div className="field">
      <label
        className={clsx(
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
        placeholder={placeholderText}
        // type={type}
        required
        // value={value}
        // onChange={onChange}
      />
    </div>
  )

}

export default Field;