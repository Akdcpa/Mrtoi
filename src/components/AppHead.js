import React from 'react';
import {withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Facebook from '../imgs/fb_icon.png'
import Instagram from '../imgs/icon.png'
import Twitter from '../imgs/twitter_icon.png'
import LinkedIn from '../imgs/linkedin_icon.png'
import PhoneIcon from '@material-ui/icons/Phone';
import  MailOutlineIcon from '@material-ui/icons/MailOutline';
import Drawer from '@material-ui/core/Drawer';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InfoIcon from '@material-ui/icons/Info';

const useStyles =theme => ({
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
  mediaHide:{
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  drawerMediaHide:{
    display:'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
  },
  textStyle:{
    color:'white',
    fontSize:'20px',
    fontWeight:500,
    paddingRight:30,
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    cursor:'pointer',
  },
  appBar:{
    backgroundColor:'black'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: "rgba(0,0,0,0.6)"
    },
    divSytle:{
      backgroundColor:'white',
      dispaly:'none',
      [theme.breakpoints.down('xs')]:{
        display:'flex'
      },
    },
});

class AppHead extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      anchorEl:null ,
      mobileMoreAnchorEl:null,
      fb_size:35,
       insta_size:28,
       twitter_size:35,
       in_size:35,
       mailColor:'white',
       top: false,
       left: false,
       bottom: false,
       right: false,
       drawerStatus:false,
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
   this.setState({insta_size:38})
 }
 else{
   this.setState({insta_size:28})
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


  render(){
    const {classes} = this.props;
    const mobileMenuId = 'primary-search-account-menu-mobile';
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home' , 'Blog' , 'Location'].map((text, index) => (
          <ListItem button >
            <ListItemIcon>{index===0 ? <HomeIcon style={{color:'white'}} /> :
             index===1 ? <InfoIcon style={{color:'white'}} />:<LocationOnIcon style={{color:'white'}} /> }</ListItemIcon>
            <ListItemText primary={<Typography style={{color:"white"}} >{text}</Typography>} />
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" className={classes.divSytle} />

      <div>
      <List className={classes.drawerMediaHide} >
          <ListItem >
             <a style={{cursor:'pointer'}} >
             <img style={{height:this.state.fb_size , weight:this.state.fb_size}} src={Facebook}/></a>
          </ListItem>
          <ListItem >
              <a style={{cursor:'pointer'}} >
                <img style={{height:this.state.insta_size , weight:this.state.insta_size}} src={Instagram}/></a>
          </ListItem>    
          <ListItem >
              <a style={{cursor:'pointer'}} >
                <img style={{height:this.state.in_size , weight:this.state.in_size}} src={LinkedIn}/></a>
          </ListItem>
          <ListItem >
              <a style={{cursor:'pointer'}} >
                <img style={{height:this.state.twitter_size , weight:this.state.twitter_size}} src={Twitter}/></a>
          </ListItem>
      </List>
      </div>

    </div>
  );
    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar}  >
          <Toolbar>
            <PhoneIcon/>
            <Typography style={{marginRight:18}} >+918248314696</Typography>
                <a onMouseEnter={this.mailColorEvent} onMouseLeave={this.mailColorEvent} style={{cursor:'pointer'}} >
                <MailOutlineIcon style={{color:this.state.mailColor}} /></a>
                <a onMouseEnter={this.mailColorEvent} onMouseLeave={this.mailColorEvent} style={{cursor:'pointer'}} >
                <Typography style={{color:this.state.mailColor}} >ak@gmail.com</Typography></a>
         
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            {/* <text className={classes.textStyle} >Home</text>  
                 <text className={classes.textStyle} >Blog</text>  
                <text className={classes.textStyle} >Contact</text>   */}
                   <div>
            <Toolbar className={classes.mediaHide} > 
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
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={toggleDrawer('right',true)}
                color="inherit"
              >
                <MoreOutlinedIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer width={100} classes={{paper:classes.paper}} anchor="right" open={this.state.right} onClose={toggleDrawer('right', false)}>
      {sideList('right')}
      </Drawer>
      </div>
    );
  }
}
AppHead.propTypes={
  classes:PropTypes.object.isRequired,
}
export default withStyles(useStyles)(AppHead);