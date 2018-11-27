import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import MainForm from './components/MainForm';

class App extends Component {

  render() {
    return(
    	<Router>
    		<MainForm />
    	</Router>    
    )
  }
}

export default App;