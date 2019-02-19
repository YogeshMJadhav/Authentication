import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Secret from './components/secret';
import NotFound from './components/notFound'
import Callback from './components/callback';
class App extends Component {
  render() {
    let mainComponent = '';
      switch(this.props.location){
        case "":
          mainComponent = <Main {...this.props}/>
          break;
        case "secret":
          mainComponent = <Secret/>
          break;
        case "callback": 
          mainComponent = <Callback/>
          break;  
        default:
          mainComponent = <NotFound/>    
      }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> WelCome to Reactjs with Auth0, {this.props.name} </h1>
        </header>
        
        { mainComponent }
      
      </div>
    );
  }
}

export default App;
