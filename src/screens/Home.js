import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import  MailOutlineIcon from '@material-ui/icons/MailOutline';
import {AppBar,Typography , Toolbar , Card , makeStyles}from '@material-ui/core'
import AppHead from '../components/AppHead'
import backImage from '../imgs/back.jpg'
import HomeNav from '../components/HomeNav'
import Blog from './Blog'
import Background_Page from '../components/Background_Page'
export default class App extends React.Component{
  render(){
    return(
      <div className={styles.root}>
        <AppHead/>
        {/* <HomeNav/> */}
        <Background_Page/> 
        {/* <Blog/> */}
      </div>  
    );
  }
}
const styles ={
    root:{
        flexGrow: 1,
        // display:'flex',
    },
    header: {
      backgroundImage: `url(${backImage})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      // alignItems: 'flex-end',
      textAlign:'right',
      justifyContent:'space-between'
    },
    textStyle:{
      color:'white',
      fontSize:'20px',
      fontWeight:500,
      paddingRight:30,
    }
  
  };
// export default App
