import './App.css';
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  RenderMainRoutes(){
    return(
      <Switch>
        
      </Switch>
    )
  }
  render(){
    return(
      <div className='App'>
        <header 
            className='App_header'>
        </header>
        <main className='App_main'>
          <NavRoutes />
          {this.RenderMainRoutes()}
        </main>
      </div>
    )
  }
}

export default App;
