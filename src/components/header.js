
import React from 'react';

import logo from '../img/logo.png';
import pig from '../img/pig.png';

const Header = () => (

        
  <header>
      <div className="container ">
          <div className="row">
              <div className="col-md-5">
                <img src={logo}  alt="logo" />
              </div>
           
              <div className="col-md-2 offset-md-5">
              <img src={pig}  alt="Porco" />
              </div>              
          </div>
      </div>
  </header>
  
)
export default Header;

