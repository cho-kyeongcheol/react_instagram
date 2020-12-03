import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, First, Second } from './pages';
import Header from './components/layout/header/Header';


class App extends Component {
  render() {
    return (      
      <Router>
        <div className="App">  
        <Header />
        </div>
      
      
        <div>        
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/first">First</Link>
              </li>
              <li>
                <Link to="/second">Second</Link>
              </li>
            </ul>
          </nav>
         

          <Route exact path='/' component={Home}/>
          <Route path='/first' component={First}/>
          <Route path='/second' component={Second}/>
        </div>
      </Router>
    );
  }
}


export default App;