import React, { Fragment, useState } from "react"
import NavBar from "./components/layout/NavBar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import User from "./components/users/User"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import GithubState from "./contexts/github/GithubState"
import "./App.css"

const App = () => {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({ message, type })
    setTimeout(() => setAlert(null), 3000)
  }

  return (
    <GithubState>
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  )
}

export default App
