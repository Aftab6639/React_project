import React from 'react'

function Alert(props) {
    console.log(props)
  return (
    <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
      {props.alert==null ? <div></div> : <div>{props.alert.msg}</div>}
     </div>
    </div>    
  )
}

export default Alert

