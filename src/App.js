import React from 'react';
import './App.css';
import Home from './screens/Home'
import Blog from './screens/Blog'
import {Router , Route , Link ,  IndexRoute} from 'react-router'
import ReactDom from 'react-dom'
import Contact from './screens/Contact'
import CourseDetails from './components/CourseDetails'
import LineFollower from './components/Courses/LineFollower'
import IotHome from './components/Courses/IotHome'
import BluetoothController from './components/Courses/BluetoothController'
export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        {/* <Home/> */}
        {/* <Blog/> */}
        {/* <Contact/> */}
         <LineFollower></LineFollower>
         <IotHome/>
         <BluetoothController/>
      </div>
    );
  }
}
