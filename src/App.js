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
import ObstacleAvoid from './components/Courses/ObstacleAvoid'
import BluetoothController from './components/Courses/BluetoothController'
import SpanIcon from './components/SpanIcon'
export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        {/* <SpanIcon/> */}
        <Home/>
        {/* <Blog/> */}
        {/* <Contact/> */}
         {/* <LineFollower></LineFollower> */}
         {/* <IotHome/> */}
         {/* <BluetoothController/> */}
         {/* <ObstacleAvoid/> */}
      </div>
    );
  }
}
