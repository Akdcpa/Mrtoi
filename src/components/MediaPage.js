import React, { Component } from 'react'
import {withStyles , Typography , Grid , Button , OutlinedInput} from '@material-ui/core'
import PropTypes from 'prop-types';
import Letter from '../imgs/letter.svg'
import Mail from '../imgs/email.png'
import Location from '../imgs/location.png'
import Share from '../imgs/share.png'
import FacebookIcon from '@material-ui/icons/Facebook'; 
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Footer from './BottomFooter'
 class MediaPage extends React.Component {
  render() {
      const {classes} = this.props;
    return (
      <div className={classes.root}>
    <Grid container className={classes.root} direction='row' spacing={2}>
      <Grid direction='column' item md> 
      <div className={classes.alignLetter} >
        <img style={{width:95 , height:95}} className={classes.letterStyle} src={Mail} ></img>
      </div>  
      <div style={{padding:15}}  ><text style={{fontSize:27 , fontWeight:'bold'}} >Contact us Today</text></div>
      <div style={{padding:15}}  > <text style={{fontSize:19 , fontWeight:'lighter'}} >Phone:+91 8248314696</text></div>
      <div style={{padding:15}}  ><text style={{cursor:'pointer' , fontSize:19 , fontWeight:'bold'}} >mrtoi2020@gmail.com</text></div>
      </Grid>
      <Grid item  md >
      <div className={classes.alignLetter} >
        <img style={{width:95 , height:95}} className={classes.letterStyle} src={Location} ></img>
        </div>   
    
        <div style={{padding:15}}  ><text style={{fontSize:27 , fontWeight:'bold'}} >Visit Our Office</text></div>
      <div style={{padding:15}}  > <text style={{fontSize:19 , fontWeight:'lighter'}} >chruch christ,kundrathur . chennai-600069</text></div>
      <div style={{padding:15}}  ><text style={{cursor:'pointer' , fontSize:19 , fontWeight:'bold'}} >mrtoi2020@gmail.com</text></div>
    </Grid>
    <Grid item  md >
    <div className={classes.alignLetter} >
        <img style={{width:95 , height:95}} className={classes.letterStyle} src={Share} ></img>
        </div>  
    <div style={{padding:15}}  ><text style={{fontSize:27 , fontWeight:'bold'}} >Be Social</text></div>
      {/* <div style={{padding:15}}  > <text style={{fontSize:19 , fontWeight:'lighter'}} >Phone:+91 8248314696</text></div>
      <div style={{padding:15}}  ><text style={{cursor:'pointer' , fontSize:19 , fontWeight:'bold'}} >mrtoi2020@gmail.com</text></div> */}
     <div style={{paddingTop:35}} >  <FacebookIcon  style={{cursor:'pointer' ,width:40 , height:40 ,paddingRight:15 , color:'#3b5998'}} />
       <InstagramIcon style={{cursor:'pointer',width:40 , height:40 ,paddingRight:15 , color:'#e4405f'}} />
        <TwitterIcon style={{cursor:'pointer',width:40 , height:40 ,paddingRight:15, color:'#00acee'}} />
        <LinkedInIcon style={{cursor:'pointer',width:40 , height:40 ,paddingRight:15, color:'#0e76a8'}}  />
    </div>
    </Grid>
    </Grid>
              
      </div>
    )
  }
}

const styles=theme=>({
    root:{
        flexGrow:1,
        padding: theme.spacing(0, 3),
    },
    text:{
        fontWeight:'160px',
    },
    // letterStyle:{
    //     width:340,
    //     height:340
    // },
    alignLetter:{
        display: 'flex',
        justifyContent:'center',
        paddingTop:20

    },
    textField:{
        padding:10
        // width:,
    },
    secondGrid:{
        display:'flex',
        justifyContent:"center"
    }
  

})

MediaPage.propTypes={
    classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(MediaPage);