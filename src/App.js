import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
