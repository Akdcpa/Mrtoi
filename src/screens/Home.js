import React from 'react';
import {AppBar,Typography , Toolbar , Card , withStyles}from '@material-ui/core'
import AppHead from '../components/AppHead'
import backImage from '../imgs/back.jpg'
import HomeNav from '../components/HomeNav'
import Background_Page from '../components/Background_Page'
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Facebook from '../imgs/fb_icon.png'
import Instagram from '../imgs/icon.png'
import Twitter from '../imgs/twitter_icon.png'
import LinkedIn from '../imgs/linkedin_icon.png'
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
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreIcon from '../imgs/more.png'
import HomeNext from '../components/HomeNext'
import BottomFooter from '../components/BottomFooter'
import HomeCourse from '../components/HomeCourse'
import Application from '../components/Application'
class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
       scrollEvent:false,
       textHide:true,
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop >20) {
          this.setState({scrollEvent:true })
          this.setState({textHide:false })

      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop<60) {
          this.setState({scrollEvent:false})
          this.setState({textHide:true })
      }
    });
    
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
    return(
      <div className={styles.root}>
        <AppHead/>
          {/* { this.state.scrollEvent ? ((window.innerHeight<600 && window.innerWidth<600) ?
        <HomeNav backColor='black' textColor="white" >
          <div className={classes.grow}/>
            <div style={{display:'flex' , justifyContent:'flex-end' , paddingRight:15}} >
              <IconButton
                 className={classes.sectionIcon}
                 aria-label="show more"
                 aria-controls={mobileMenuId}
                 aria-haspopup="true"
                 onClick={toggleDrawer('right',true)}
                 color="inherit" >
                 <ListAltIcon />
               </IconButton>
               </div> 
        </HomeNav> : <HomeNav backColor='black' textColor="white"  >
                  </HomeNav> ) : null
          } */}
        {/* <HomeNav  backColor="white" textColor="black" /> */}
        <Background_Page/>  
        <HomeNext/>
        <HomeCourse/> 
         <Application/>
        <BottomFooter/> 
      </div>  
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
        // display:'flex',
    },
    header: {
      backgroundImage: `url(${backImage})`,
      height: window.innerHeight,
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
    },
    appBar:{
      backgroundColor:'black',
      height:80,
    },
    sectionIcon:{
      color:'white' , 
      display:'none' , 
      [theme.breakpoints.down('xs')]:{
        display:'flex',
      }
    },
  });

  Home.propsTypes={
    classes:PropTypes.object.isRequired,
  }
export default withStyles(styles)(Home);