import React, { useContext } from "react"
import AlertContext from "../../contexts/alert/alertContext"

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const { alert } = alertContext
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas-info-circle' />
        {alert.message}
      </div>
    )
  )
}
export default Alert
