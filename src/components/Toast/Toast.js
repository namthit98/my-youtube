import React from 'react'

import classes from './Toast.module.css'

const Toast = props => (
  <div
    className={`${classes.Toast} ui ${props.color || 'red'} label large`}
  >
    {props.children}
  </div>
)

export default Toast
