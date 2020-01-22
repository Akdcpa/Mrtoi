import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home'
export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Home/>
      </div>
    );
  }
}
