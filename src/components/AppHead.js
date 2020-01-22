import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import  MailOutlineIcon from '@material-ui/icons/MailOutline';
import {AppBar,Typography , Toolbar }from '@material-ui/core'
import backImage from '../imgs/back.jpg'
import Facebook from '../imgs/fb_icon.png'
import Instagram from '../imgs/insta_icon.png'
import Twitter from '../imgs/twitter_icon.png'
import LinkedIn from '../imgs/linkedin_icon.png'

export default class AppHead extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render(){
    return(
      <div style={styles.root} >
        <AppBar position="static" style={styles.appBar}>
          <div style={{}} >
              <Toolbar>
                <PhoneIcon/><Typography style={{marginRight:18}} >+918248314696</Typography>
                <MailOutlineIcon/><Typography>ak@gmail.com</Typography>
                <div style={{alignItems:'flex-end'}} >
                <Toolbar style={{alignItems:'right'}} >
                <img style={{height:35 , weight:35 , alignItems:'flex-end'}} src={Facebook} onClick={()=>console.log("clicked")}/>
                <img style={{height:35 , weight:35}} src={Instagram}/>
                <img style={{height:35 , weight:35}} src={LinkedIn}/>
                <img style={{height:35 , weight:35}} src={Twitter}/>
                </Toolbar>
                </div>
              </Toolbar>
              </div>
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
      // flex: 1,
      width: 'auto',
      flexDirection: "row",
      // justifyContent: "space-between"
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
