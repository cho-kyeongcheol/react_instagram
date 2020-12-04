import React, { Component } from 'react';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, First, Second, Third } from '../../../pages';


const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
    {children}
  </div>
)



class Header extends Component {
  render() {
    return(

        <div className="apps">
          <div className="black-nav">
              Instagrang
          </div>
          <div className="menu">
        <Link to="/"><MenuItem>🏠</MenuItem></Link>
        <Link to="/first"><MenuItem>🔎</MenuItem></Link>
        <Link to="/second"><MenuItem>❤</MenuItem></Link>
        <Link to="/third"><MenuItem>⚽</MenuItem></Link>
        </div>

        <div>   
          <Route exact path='/' component={Home}/>
          <Route path='/first' component={First}/>
          <Route path='/second' component={Second}/>
          <Route path='/third' component={Third}/>
        </div>

        </div>

      );
    
  };
}
export default Header;