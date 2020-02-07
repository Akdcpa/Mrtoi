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
import HomeNext from './components/HomeNext'
import Loader from './components/Loader'
export default class App extends React.Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} ></Route>
              <Route path="/Blog"  component={Blog} ></Route>
              <Route path="/Contact"  component={Contact} ></Route>
              <Route path="/Home/BluetoothController"  component={BluetoothController} ></Route>
              <Route path="/Home/LineFollower"  component={LineFollower} ></Route>
              <Route path="/Home/ObstacleAvoid"  component={ObstacleAvoid} ></Route>
              <Route path="/Home/IotHome"  component={IotHome} ></Route>
              <Route path="/Home/HomeNext"  component={HomeNext} ></Route>
          </Switch>
        </BrowserRouter>
         <BottomFooter/>
      </div>
    );
  }
}
