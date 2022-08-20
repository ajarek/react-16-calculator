import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
export const Button = (props) => {
  const { label, onClick } = props
  return (

    <button
      className={label !== '=' ? 'button' : 'equal'}
      onClick={onClick}
    >{label}
    </button>

  )
}
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Button
