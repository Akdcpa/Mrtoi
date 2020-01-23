import React from 'react';
import './App.css';
import Home from './screens/Home'
import Blog from './screens/Blog'
export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        {/* <Home/> */}
        <Blog/>
      </div>
    );
  }
}
