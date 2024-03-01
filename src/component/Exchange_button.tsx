import React from 'react'
import PropTypes from "prop-types";

const Exchange_button = (props: any) => {
  return (
    <button className='exchange-button' onClick={props.onClick}>Get Exchange Rate</button>
  )
}
Exchange_button.propTypes = {
    onClick: PropTypes.func
}


export default Exchange_button