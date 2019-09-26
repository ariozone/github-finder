import AlertContext from "../alert/alertContext"
import AlertReducer from "../alert/alertReducer"
import React, { useReducer } from "react"
import { SET_ALERT, CLEAR_ALERT } from "../types"

const AlertState = props => {
  const initState = null
  const [state, dispatch] = useReducer(AlertReducer, initState)
  const showAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } })

    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000)
  }
  return (
    <AlertContext.Provider value={{ alert: state, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  )
}
export default AlertState
