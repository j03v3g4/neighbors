import React from 'react';
import classes from './Avatar.css'
const avatar = (props) => {
  let contextClass = classes.NavImage;
  if (props.context === 'chat') {
    contextClass = classes.ChatImage;
  }
  return (
    <div className={contextClass}>
      <i className="fas fa-user-circle"></i>
      <div className={classes.Username}>{props.username}</div>
    </div>
  )
}

export default avatar;
