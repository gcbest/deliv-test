import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './Login';
import Staging from './Staging';

class App extends Component {
    render() {
        return (
          <div className="container">
              <BrowserRouter>
                  <div>
                      <Route exact path="/" component={Login}/>
                      <Route path="/staging" component={Staging}/>
                  </div>
              </BrowserRouter>
          </div>  
        );
    }
}

export default App;