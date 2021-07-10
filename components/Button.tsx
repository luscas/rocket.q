import { HTMLAttributes } from 'react'
import classnames from 'classnames'

export type ButtonVariant = "normal" | "outline"
export type ButtonColor = "primary" | "secondary" | "danger"
export type ButtonSize = "sm" | "lg" | "xl"
export type ButtonType = "button" | "reset" | "submit"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
  color?: ButtonColor
  size: ButtonSize
  variant?: ButtonVariant
}


const defaultProps = {
  type: 'button',
  color: 'primary',
  size: 'lg',
  variant: 'normal'
}

const Button = (props : ButtonProps) => {
  return (
    <button
      className={classnames('button',
      {
        'button__outline' : props.variant == 'outline',
        [`button__${props.color}`]: props.color,
        [`button__${props.size}`]: props.size,
      })}
      {...props}
    >
      {props.children}
    </button>
  )
}

Button.displayName = 'Button'
Button.defaultProps = defaultProps

export default Button
