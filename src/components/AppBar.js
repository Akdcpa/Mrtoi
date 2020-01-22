import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import  MailOutlineIcon from '@material-ui/icons/MailOutline';
import {AppBar,Typography , Toolbar }from '@material-ui/core'
import backImage from './imgs/back.jpg'
export default class AppBar extends React.Component{
  render(){
    return(
      <div style={styles.backGroundStyle} className={styles.root}>
          
        <AppBar position="static" style={styles.appBar}>
                <Toolbar>
                <PhoneIcon/><Typography style={{marginRight:18}} >+918248314696</Typography>
                <MailOutlineIcon/>
                </Toolbar>
          </AppBar>
      </div>
    );
  }
}
const styles = {
    root:{
        flexGrow: 1,
    },
    appBar: {
      background: "#040A0E",
    //   padding: 10,
      flex: 1,
      width: 'auto',
      flexDirection: "row",
      justifyContent: "space-between"
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
