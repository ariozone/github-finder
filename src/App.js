import React from "react"
import NavBar from "./components/layout/NavBar"
import User from "./components/users/User"
import Alert from "./components/layout/Alert"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import NotFound from "./components/pages/NotFound"
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
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App
