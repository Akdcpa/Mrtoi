import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import  MailOutlineIcon from '@material-ui/icons/MailOutline';
import {AppBar,Typography , Toolbar , Card }from '@material-ui/core'
import AppHead from '../components/AppHead'
import backImage from '../imgs/back.jpg'
export default class App extends React.Component{
  render(){
    return(
      <div className={styles.root}>
          <AppHead/>
          <div style={styles.header} >
            <div style={styles.content} >

            </div>
          </div>
      </div>
    );
  }
}
const styles = {
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
    }
  
  };
// export default App
