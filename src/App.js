import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
  	<BrowserRouter>
	    <div className="App">
	      <Navbar></Navbar>
	      <Switch>
	      <Route path='/' component={Dashboard}/>
	      </Switch>
	    </div>
    </BrowserRouter>
  );
}

export default App;
