import React from 'react'

type Props = {
  text: string,
  className: string
}

const Button = ({text, className}: Props) => {
  return (
    <button className={className}>
      {text}
  </button>
  )
}

export default Button
