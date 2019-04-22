import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom'

import './style.scss'

import Home from './components/home'

const App = () => {
  return (
    <Browser>
      <div>
        <Home />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Browser>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
