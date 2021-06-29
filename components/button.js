const Button = ({
  ref,
  children,
  type,
  style = 'primary',
  size = 'lg',
  outline = false,
  customStyle,
}) => {
  return (
    <button
      ref={ref}
      type={type}
      className={`button button__${style ?? ''} button__${size ?? ''} ${
        outline ? 'button__outline' : ''
      } ${customStyle ?? ''}`}
    >
      {children}
    </button>
  )
}

export default Button
