import React from 'react';
import LandingPage from './Containers/LandingPage';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
