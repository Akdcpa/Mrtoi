import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {Button}from '@material-ui/core'
import backImage from '../imgs/back.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import SecondNav from '../components/SecondNav'
import IconButton from '@material-ui/core/IconButton';
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
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreIcon from '../imgs/more.png'
 class Background_Page extends React.Component{
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
      
    }
  }
  handleButtonColor=(event)=>{
    if(event.type==='mouseenter'){
      this.setState({buttonColor:'white'})
    }
    else{
      this.setState({buttonColor:'#01bacf'})
    }
  }
  handleExplore=(event)=>{
    if(event.type==='mouseenter'){
      this.setState({exploreColor:'#6BA6FC'})

    }
    else{
      this.setState({exploreColor:'white'})
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop >60) {
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
      <div className={classes.root}>
           { this.state.scrollEvent ? ((window.innerHeight<600 && window.innerWidth<600) ?
            <AppBar position="sticky" className={classes.appBar}  >
            <Toolbar>
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
            </Toolbar>
          </AppBar>: <AppBar position="sticky" className={classes.appBar}  >
                    <Toolbar>
                    <div className={classes.grow}/>
                      <text className={classes.textStyle} >Home</text>  
                      <text className={classes.textStyle} >Blog</text>  
                      <text className={classes.textStyle} >Contact</text>  
                    </Toolbar>
                  </AppBar> ) : null
          }
          <div className={classes.header} >

            <div className={classes.content} >
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
            { this.state.textHide ? 
               <div className={classes.homeHide} > 
            <div className={classes.grow}/>
          <text className={classes.textStyle} >Home</text>  
              <text className={classes.textStyle} >Blog</text>  
              <text className={classes.textStyle} >Contact</text>  </div> : null
          }
              <div style={{display:'flex' , justifyContent:'center' ,paddingTop:60,}} >
              <text style={{fontSize:'50px',
                 color:'white' , fontWeight:700 }}>Mr.Toi</text>
              </div>
            <div className={classes.contentBreak}>
              <text style={{color:'#D4EAF9', fontSize:'20px',
              fontFamily:'Droid Serif' ,fontStyle:'italic',display:'flex',width:'60%',paddingTop:40 }} >
                IoT is the best opportunity for career oriented creators as they 
                can learn,develop, build and understand system along with their own ideas and techniques
                </text>
            </div>
             <div className={classes.readbuttonBreak} >
              <Button size='large' onMouseEnter={this.handleButtonColor} 
                onMouseLeave={this.handleButtonColor}
                style={{backgroundColor:this.state.buttonColor ,boxShadow:'#00a8bd',width:140 ,height:60 ,borderRadius:0}} >Read More</Button>
            </div>
            </div>
            {/* <div style={{position:'absolute',bottom:20,right:0,left:0}} > */}
            <div className={classes.exploreBreak} >
              <a onMouseEnter={this.handleExplore} onMouseLeave={this.handleExplore} style={{cursor:'pointer',color:this.state.exploreColor}}>
              <text style={{fontSize:18}} >Explore</text>
              <br></br><ExpandMoreIcon style={{color:this.state.exploreColor,fontSize:30}} ></ExpandMoreIcon></a>
            </div>
         
            <Drawer width={100} classes={{paper:classes.paper}} anchor="right" open={this.state.right} onClose={toggleDrawer('right', false)}>
      {sideList('right')}
      </Drawer>
          </div>  
       
      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
    header: {
      backgroundImage: `url(${backImage})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

    },
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      paddingTop:60,
      [theme.breakpoints.down('xs')]:{
        paddingTop:0,
      },
      justifyContent:'center',
      alignItems: 'center',
        },
    textStyle:{
      color:'white',
      fontSize:'20px',
      fontWeight:500,
      paddingRight:30,
      cursor:'pointer',
    },
    contentBreak:{
      display:'flex' , 
      justifyContent:'center',
    },
    readbuttonBreak:{
      display:'flex' , 
      justifyContent:'center',
      paddingTop:90,
      [theme.breakpoints.down('md')]:{
        paddingTop:10,
      },
    },
    exploreBreak:{
      // display:'flex' , 
      // justifyContent:'center',
      // padding:'50px'
      position:'absolute',
      bottom:20,
      [theme.breakpoints.down('xs')]:{
        bottom:-10,
      },
      right:0,
      left:0,
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
      // [theme.breakpoints.down('xs')]: {
      //   display: 'block',
      // },
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
      homeHide:{
        textAlign:'right',
        display:'block',
        [theme.breakpoints.down('sm')]:{
          display:'none'
        }
      },
      sectionIcon:{
        color:'white' , 
        display:'none' , 
        [theme.breakpoints.down('xs')]:{
          display:'flex',
          
        }
      },
      sectionMore:{

      }
  });

  Background_Page.propsTypes={
    classes:PropTypes.object.isRequired,
  }
// export default App
export default  withStyles(styles)(Background_Page);