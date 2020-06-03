import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from '@/views/home/index.tsx'

function App () {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
      </Switch>
    </HashRouter>
    )
}

export default App;
