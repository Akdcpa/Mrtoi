import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import  MailOutlineIcon from '@material-ui/icons/MailOutline';
import {AppBar,Typography , Toolbar }from '@material-ui/core'
import {makeStyles,fade}from '@material-ui/core/styles'
import backImage from '../imgs/back.jpg'
import Facebook from '../imgs/fb_icon.png'
import Instagram from '../imgs/insta_icon.png'
import Twitter from '../imgs/twitter_icon.png'
import LinkedIn from '../imgs/linkedin_icon.png'

export default class AppHead extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       fb_size:35,
       insta_size:35,
       twitter_size:35,
       in_size:35,
       mailColor:'white',
    }
  }
  fbSize=(event)=>{
    if(event.type==='mouseenter'){
     this.setState({fb_size:50})
   }
   else{
     this.setState({fb_size:35})
   }
 }
 instaSize=(event)=>{
  if(event.type==='mouseenter'){
   this.setState({insta_size:50})
 }
 else{
   this.setState({insta_size:35})
 }
}
inSize=(event)=>{
  if(event.type==='mouseenter'){
   this.setState({in_size:50})
 }
 else{
   this.setState({in_size:35})
 }
} 
twitterSize=(event)=>{
  if(event.type==='mouseenter'){
   this.setState({twitter_size:50})
 }
 else{
   this.setState({twitter_size:35})
 }
}
mailColorEvent=(event)=>{
  if(event.type==='mouseenter'){
   this.setState({mailColor:'#FA770A'})
 }
 else{
   this.setState({mailColor:'white'})
 }
}
  render(){
    return(
      <div style={styles.root} >
        <AppBar position="static" style={styles.appBar}>
          <Toolbar>
                <PhoneIcon/><Typography style={{marginRight:18}} >+918248314696</Typography>
                <a onMouseEnter={this.mailColorEvent} onMouseLeave={this.mailColorEvent} style={{cursor:'pointer'}} >
                <MailOutlineIcon style={{color:this.state.mailColor}} /></a>
                <a onMouseEnter={this.mailColorEvent} onMouseLeave={this.mailColorEvent} style={{cursor:'pointer'}} >
                <Typography style={{color:this.state.mailColor}} >ak@gmail.com</Typography></a>
             
              <div>
              <Toolbar> 
                {/* <Toolbar style={{alignItems:'right'}} > */}
                <a onMouseEnter={this.fbSize}onMouseLeave={this.fbSize}
                 style={{cursor:'pointer'}} ><img style={{height:this.state.fb_size , weight:this.state.fb_size}} src={Facebook}/></a>
                <a onMouseEnter={this.instaSize}onMouseLeave={this.instaSize}
                 style={{cursor:'pointer'}} ><img style={{height:this.state.insta_size , weight:this.state.insta_size}} src={Instagram}/></a>
                <a onMouseEnter={this.inSize}onMouseLeave={this.inSize}
                 style={{cursor:'pointer'}} ><img style={{height:this.state.in_size , weight:this.state.in_size}} src={LinkedIn}/></a>
                <a onMouseEnter={this.twitterSize}onMouseLeave={this.twitterSize}
                style={{cursor:'pointer'}} ><img style={{height:this.state.twitter_size , weight:this.state.twitter_size}} src={Twitter}/></a>
              </Toolbar>
              </div>
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
      // flex: 1,
      // width: 'auto',
      // flexDirection: "row",
      // justifyContent: "space-between"
    },
    textStyle:{
      color:'white',
      fontSize:'20px',
      fontWeight:500,
      paddingRight:30,
    }
  
  };
// export default App
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
