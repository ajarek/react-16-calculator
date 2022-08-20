import React from 'react'
import PropTypes from 'prop-types'
import './Display.css'
export const Display = (props) => {
  const { operation, result } = props
  return (
    <div className={'display'}>

      <h3>{operation}</h3>
      <h1>{result}</h1>
    </div>
  )
}
Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.array
}
export default Display
