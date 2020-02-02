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
import DisplayDrawer from './DisplayDrawer'
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
      if (isTop >30) {
          this.setState({scrollEvent:true })
          this.setState({textHide:false })

      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop<30) {
          this.setState({scrollEvent:false})
          this.setState({textHide:true })

      }
    });
    
  }
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
          <div className={classes.header} >
           
            <DisplayDrawer extColor="white"
              iconcolor="white"
              backColor="black"  ></DisplayDrawer>
            <div className={classes.headerContent} style={{display:'flex',justifyContent:'center'}} >
              <div>
              <text style={{fontSize:'50px',
                 color:'white' , fontWeight:700}}>Mr.Toi</text>
                </div>
            </div>
            <div className={classes.content} >
              <text className={classes.textContent} >
                IoT is the best opportunity for career oriented creators as they 
                can learn,develop, build and understand system along with their own ideas and techniques
                </text>
            </div>
             <div className={classes.readbuttonBreak} >
              <Button size='large' onMouseEnter={this.handleButtonColor} 
                onMouseLeave={this.handleButtonColor}
                style={{backgroundColor:this.state.buttonColor ,
                boxShadow:'#00a8bd',width:140 ,height:60 ,borderRadius:0}} >Read More</Button>
            </div>
            <div>
            <a onMouseEnter={this.handleExplore} onMouseLeave={this.handleExplore} 
              style={{cursor:'pointer',color:this.state.exploreColor}}>
              <text style={{fontSize:18}} >Explore</text>
              <br></br>
              <ExpandMoreIcon style={{color:this.state.exploreColor,fontSize:30}} ></ExpandMoreIcon></a>
              </div>
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
    // marginTop:20,
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
      // display:'flex' , 
      // justifyContent:'center',
      // padding:'50px'
      // position:'absolute',
      // bottom:20,
      // [theme.breakpoints.down('xs')]:{
      //   bottom:-10,
      // },
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
      background: "rgba(0,0,0,0.6)",
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

  Background_Page.propsTypes={
    classes:PropTypes.object.isRequired,
  }
// export default App
export default  withStyles(styles)(Background_Page);

   {/* { this.state.scrollEvent ? ((window.innerHeight<600 && window.innerWidth<600) ?
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
          } */}



            {/* <div className={classes.headAlign} >
             
              </div> 
            <div className={classes.contentBreak}>
              <text className={classes.textContent} >
                IoT is the best opportunity for career oriented creators as they 
                can learn,develop, build and understand system along with their own ideas and techniques
                </text>
            </div>
             <div className={classes.readbuttonBreak} >
              <Button size='large' onMouseEnter={this.handleButtonColor} 
                onMouseLeave={this.handleButtonColor}
                style={{backgroundColor:this.state.buttonColor ,
                boxShadow:'#00a8bd',width:140 ,height:60 ,borderRadius:0}} >Read More</Button>
            </div>
            </div>
            <div style={{position:'absolute',bottom:20,right:0,left:0}} >
            <div className="align-bottom" >
              <a onMouseEnter={this.handleExplore} onMouseLeave={this.handleExplore} 
              style={{cursor:'pointer',color:this.state.exploreColor}}>
              <text style={{fontSize:18}} >Explore</text>
              <br></br>
              <ExpandMoreIcon style={{color:this.state.exploreColor,fontSize:30}} ></ExpandMoreIcon></a>
            </div>
         
            <Drawer width={100} classes={{paper:classes.paper}} anchor="right" open={this.state.right} onClose={toggleDrawer('right', false)}>
      {sideList('right')}
      </Drawer>
      </div> */}