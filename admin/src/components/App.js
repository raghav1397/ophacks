import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../style/App.css';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/user/:username" compontent={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
