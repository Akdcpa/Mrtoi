import React from 'react';
import './App.css';
import Home from './screens/Home'
import Blog from './screens/Blog'
import {Router , Route , Link ,  IndexRoute} from 'react-router'
import ReactDom from 'react-dom'
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
