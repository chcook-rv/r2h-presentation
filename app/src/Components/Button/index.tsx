import React, { FC } from 'react'

interface ButtonProps {

}

const Button: FC<ButtonProps> = () => {
  return (<button
    className="Button"
    onClick={() => console.log('button clicked')}
    type="button"
  >
    Submit Button
  </button>)
}

export default Button
