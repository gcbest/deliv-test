import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import Staging from './Staging';
import Header from './Header';
import PrivateRoute from './PrivateRoute';

class App extends Component {
    render() {
        return (
          <div className="container">
              <BrowserRouter>
                  <div>
                      <Header/>
                      <Route exact path="/" component={Login}/>
                      <PrivateRoute path="/staging" component={Staging}/>
                  </div>
              </BrowserRouter>
          </div>  
        );
    }
}

export default App;