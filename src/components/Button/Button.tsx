import React from "react";

type ButtonProps = {
  label: String,
  class?: String
}

const Button = (props: ButtonProps) => {
  return (
    <button>{props.label}</button>
  )
}

export default Button

