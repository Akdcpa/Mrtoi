import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {Button  , Grid}from '@material-ui/core'
import backImage from '../imgs/back.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '../imgs/fb_icon.png'
import Instagram from '../imgs/icon.png'
import Twitter from '../imgs/twitter_icon.png'
import LinkedIn from '../imgs/linkedin_icon.png'
import PhoneIcon from '@material-ui/icons/Phone';
import Home from '../screens/Home'
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
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreIcon from '../imgs/more.png'
import HomeNav from './HomeNav'
import SpanIcon from './SpanIcon'
import {connect , MapStateToProps , MapDispatchToProps , Provider} from 'react-redux'
import { withRouter , Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom'

import { ClickAwayListener } from '@material-ui/core';
  import  compose from 'recompose/compose'
 class DisplayDrawer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
       buttonColor:'#01bacf',
       exploreColor:'white',
       scrollEvent:false,
       textHide:true,
       top: false,
       left: false,
       bottom: false,
       right: false,
       drawerStatus:false,
       fb_size:35,
       insta_size:28,
       twitter_size:35,
       in_size:35,
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop >30) {
          this.state.scrollEvent = true ;
          this.setState({scrollEvent:true })
          // this.setState({textHide:false })

      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop<30) {
        this.state.scrollEvent = false ;
          this.setState({scrollEvent:false})
          // this.setState({textHide:true })
      }
    });
    
  }
 
  render(){
    const rootElement=document.getElementById('root');
    // ReactDOM.render(
    //   <Provider store={store} >
    //     <Home/>
    //   </Provider>
    // )
   
    const {classes} = this.props;
    const mobileMenuId = 'primary-search-account-menu-mobile';

    const toggleDrawer = (side, open) => event => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      this.setState({ ...this.state, [side]: open });
    };
    const fullList = side => (
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
          <ListItem
            onClick={()=>this.props.history.push("/")}
            button >
              <ListItemIcon>
              <HomeIcon style={{color:'white'}} /></ListItemIcon>
              <ListItemText primary={<Typography style={{color:"white"}} >Home</Typography>} />
            </ListItem>
            <ListItem
            onClick={()=>this.props.history.push("/Blog")}
            button >
              <ListItemIcon> <InfoIcon style={{color:'white'}}/>
              </ListItemIcon>
              <ListItemText primary={<Typography style={{color:"white"}} >Blog</Typography>} />
            </ListItem>  
            <ListItem
            onClick={()=>this.props.history.push("/Contact")}
            button >
              <ListItemIcon><LocationOnIcon style={{color:'white'}} /> </ListItemIcon>
              <ListItemText primary={<Typography style={{color:"white"}} >Contact</Typography>} />
            </ListItem>

        </List>
        {/* <Divider variant="middle" className={classes.divSytle} /> */}
  
        <div>
        <List className={classes.drawerMediaHide} >
            <ListItem >
               <a href="https://www.facebook.com/MrToi-103532734467304" target="_blank" rel="noopener noreferrer"style={{cursor:'pointer'}} >
               <img style={{height:this.state.fb_size , weight:this.state.fb_size}} src={Facebook}/></a>
            </ListItem>
            <ListItem >
                <a href="https://www.instagram.com/mrtoi_official/" target="_blank"rel="noopener noreferrer" style={{cursor:'pointer'}} >
                  <img style={{height:this.state.insta_size , weight:this.state.insta_size}} src={Instagram}/></a>
            </ListItem>    
            <ListItem >
                <a href="https://www.linkedin.com/in/mr-toi-318193199" target="_blank"rel="noopener noreferrer" style={{cursor:'pointer'}} >
                  <img style={{height:this.state.in_size , weight:this.state.in_size}} src={LinkedIn}/></a>
            </ListItem>
            <ListItem >
                <a href="https://twitter.com/MrToi10" target="_blank" rel="noopener noreferrer"style={{cursor:'pointer'}} >
                  <img style={{height:this.state.twitter_size , weight:this.state.twitter_size}} src={Twitter}/></a>
            </ListItem>
        </List>
        </div>
        </div>
      );
    
    return(
      <div className={classes.root}>
       
          <div className={classes.grow} />
         <div className={classes.homeDisplay} >
         {  <div>
          <text onClick={()=>this.props.history.push("/")} 
          style={{color:this.props.textColor}} className={classes.textStyle} >Home</text> 
          <text onClick={()=>this.props.history.push("/Blog")} 
          style={{color:this.props.textColor}} className={classes.textStyle} >
             Blog</text>
            <text onClick={()=>this.props.history.push("/Contact")} 
            style={{color:this.props.textColor}}  className={classes.textStyle} >Contact</text>  
            </div>
            }</div>
     
            <div className={classes.spanDisplay} >
              <IconButton
                className={classes.sectionIcon}
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={toggleDrawer('top', true)}
                color="inherit" 
              >
                <SpanIcon   color={this.props.iconcolor} ></SpanIcon>
                </IconButton>
            </div>
     
      <Drawer classes={{paper:classes.paperColor}} anchor="top" open={this.state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
</div>

    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
    header: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)) , url(${backImage})`,
      height:window.innerHeight,
      backgroundPosition: 'center',
      // backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    headerContent:{
        marginTop:60
    },
    textStyle:{
      color:'white',
      fontSize:'20px',
      fontWeight:500,
      paddingRight:30,
      cursor:'pointer',
    },
    content:{  display:'flex',
    justifyContent:"center",
    margin:40
  },
  homeDisplay:{
    dispaly:'flex',
    textAlign:'right',
    [theme.breakpoints.down("xs")]:{
      display:'none',
    }
  },
    textContent:{
      color:'#D4EAF9', 
      fontSize:'16px',
      fontFamily:'Droid Serif' ,
      fontStyle:'italic',
     display:'flex',
     justifyContent:"center",
     minWidth:90,
      maxWidth:900
    },
    readbuttonBreak:{
      display:'flex' , 
      justifyContent:'center',
      marginBottom:-50,
      [theme.breakpoints.down('md')]:{
        paddingTop:10,
      },
    },
    exploreBreak:{
      flex:1,
      justifyContent:'flex-end',
      
    },
    spanDisplay:{
      display:'none',
      [theme.breakpoints.down('xs')]:{
       
        display:'flex',
        justifyContent:'flex-end',
        marginRight:25,

      },
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
    
    grow:{
      flexGrow:1,
    },
    appBar:{
      backgroundColor:'black',
      height:80,
      // [theme.breakpoints.down('xs')]:{
      //   height:70,
      // },
    },
    divSytle:{
      backgroundColor:'white',
      dispaly:'none',
      [theme.breakpoints.down('xs')]:{
        display:'flex'
      },
    },
    drawerMediaHide:{
      display:'none',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
      },
    },
    paperColor: {
      background: "rgba(0,0,0,0.6)"
    }
      ,
      divSytle:{
        backgroundColor:'white',
        dispaly:'none',
        [theme.breakpoints.down('xs')]:{
          display:'flex'
        },
      },
      homeHide:{
        textAlign:'right',
        display:'block',
      },
      sectionIcon:{
        color:'white' , 
        display:'none' , 
        [theme.breakpoints.down('xs')]:{
          display:'flex',
          
        }
      },
      headAlign:{
        flex:1,
        textAlign:'center',
        alignItems: 'flex-end',
        justifyContent:'flex-end'
      },
      rootGrid:{
        display:'block',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
      }
    
  });

  DisplayDrawer.propsTypes={
    classes:PropTypes.object.isRequired,
  }
// export default App
// export default withRouter(connect()(withStyles(styles)(DisplayDrawer)));
// export default compose(withStyles(styles) , connect(MapStateToProps , MapDispatchToProps))(DisplayDrawer);
// export default   withStyles(styles)(DisplayDrawer);

export default (withStyles(styles))(withRouter(DisplayDrawer));

