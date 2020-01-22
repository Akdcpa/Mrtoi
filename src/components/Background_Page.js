import React from 'react';
import {AppBar,Typography , Toolbar }from '@material-ui/core'

export default class Background_Page extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render(){
    return(
      <div style={styles.root} >
       
      </div>
    );
  }
}
const styles = {
    root:{
        flexGrow: 1,
    },
    backGroundStyle:{
    // position:'absolute' ,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundImage:`url(${backImage})`
    }
  
  };
// export default App
