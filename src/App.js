import React from 'react';
import './App.css';
import {BrowserRouter , Route , Redirect , Switch} from 'react-router-dom'
import BluetoothController from './screens/BluetoothController'
import Blog from './screens/Blog'
import Contact from './screens/Contact'
import Home from './screens/Home'
import IotHome from './screens/IotHome'
import LineFollower from './screens/LineFollower'
import ObstacleAvoid from './screens/ObstacleAvoid'
import BottomFooter from './screens/BottomFooter'
export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Switch>
              <Route path="/Home" exact component={Home} ></Route>
              <Route path="/Blog" exact component={Blog} ></Route>
              <Route path="/Contact" exact component={Contact} ></Route>
              <Route path="/Home/BluetoothController" exact component={BluetoothController} ></Route>
              <Route path="/Home/LineFollower" exact component={LineFollower} ></Route>
              <Route path="/Home/ObstacleAvoid" exact component={ObstacleAvoid} ></Route>
              <Route path="/Home/IotHome" exact component={IotHome} ></Route>

          </Switch>
        </BrowserRouter>
        {/* <SpanIcon/> */}
        {/* <Home/> */}
        {/* <Blog/> */}
        {/* <Contact/> */}
         {/* <LineFollower></LineFollower> */}
         {/* <IotHome/> */}
         {/* <BluetoothController/> */}
         {/* <ObstacleAvoid/> */}
         <BottomFooter/>

      </div>
    );
  }
}
