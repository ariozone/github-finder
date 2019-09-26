import React, { Fragment } from "react"
import NavBar from "./components/layout/NavBar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import User from "./components/users/User"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import GithubState from "./contexts/github/GithubState"
import AlertState from "./contexts/alert/AlertState"
import "./App.css"

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className='App'>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Fragment>
                      <Search />
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
      </AlertState>
    </GithubState>
  )
}

export default App
