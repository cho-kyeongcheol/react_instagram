import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, First, Second } from './pages';
import Header from './components/layout/header/Header';
import './App.css';


class App extends Component {
  render() {
    return (      
      <Router>
        <div className="App">  
        <Header />
        </div>

        

         
      
      
    
      <hr />
  
      
      
      
        
      </Router>
    );
  }
}


export default App;