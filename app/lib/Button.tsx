"use client"
import React from 'react'

type Props = {
  text: string,
  className: string
}

const Button = ({text, className}: Props) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    console.log('clicked')
  }
  return (
    <button onClick={handleClick} className={className}>
      {text}
  </button>
  )
}

export default Button
