/**
 * IMPORTS
 */
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Welcome} from './pages/welcome.js'; 


/**
 * STYLES
 */
import './App.css';


/**
 * CODE
 */
function App() {
  return (
    <div className="App">
				<BrowserRouter>
					<Switch>
						<Redirect path="/authorized" to="/home" />
						<Route path="/" exact component={Welcome} />
						<Route path="/home" />
					</Switch>
				</BrowserRouter>
    </div>
  );
}


/**
 * EXPORTS
 */
export default App;
