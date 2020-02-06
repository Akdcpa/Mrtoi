import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {withRouter , Redirect} from 'react-router-dom'
import {Button  , Grid}from '@material-ui/core'
import backImage from '../imgs/back.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '../imgs/fb_icon.png'
import Instagram from '../imgs/icon.png'
import Twitter from '../imgs/twitter_icon.png'
import LinkedIn from '../imgs/linkedin_icon.png'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InfoIcon from '@material-ui/icons/Info';
import SpanIcon from './SpanIcon'
import {Link  , animateScroll as scroll , Events , Element , scrollSpy , scroller } from "react-scroll"
import HomeNext from './HomeNext'
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
       fb_size:35,
       insta_size:28,
       twitter_size:35,
       in_size:35,
      
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
      if (isTop >0) {
          this.setState({textHide:true })
      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop<10) {
          this.setState({textHide:false })
      }
    });


    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
    
  }
  

  scrollBottom=()=>{
    scroll.scrollTo(700);
   return <Link to={HomeNext}  />

  }
  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
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
          <Divider variant="middle" className={classes.divSytle} />

          <ListItem
          onClick={()=>this.props.history.push("/Blog")}
          button >
            <ListItemIcon> <InfoIcon style={{color:'white'}}/>
            </ListItemIcon>
            <ListItemText primary={<Typography style={{color:"white"}} >Blog</Typography>} />
          </ListItem>  
          <Divider variant="middle" className={classes.divSytle} />

          <ListItem
          onClick={()=>this.props.history.push("/Contact")}
          button >
            <ListItemIcon><LocationOnIcon style={{color:'white'}} /> </ListItemIcon>
            <ListItemText primary={<Typography style={{color:"white"}} >Contact</Typography>} />
          </ListItem>

      </List>
      </div>
    );
    return(
      <div className={classes.root}>
          <div className={classes.header} >
        <Grid   justify="space-between" direction="column" container >
            <Grid item >
            <div className={classes.homeDisplay} >
              <div>
          <text onClick={()=>this.props.history.push("/")} 
          style={{color:this.props.textColor}} className={classes.textStyle} >
            {this.state.textHide === true ?"":"Home"}</text> 
          <text onClick={()=>this.props.history.push("/Blog")} 
          style={{color:this.props.textColor}} className={classes.textStyle} >
             {this.state.textHide === true ?"":"Blog"}</text>
            <text onClick={()=>this.props.history.push("/Contact")} 
            style={{color:this.props.textColor}}  className={classes.textStyle} >
               {this.state.textHide === true ?"":"Contact"}</text>  
            </div></div>
            <div className={classes.spanDisplay} >
              <IconButton
                className={classes.sectionIcon}
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={toggleDrawer('top', true)}s
                color="inherit" 
              >
                <SpanIcon   color="white" ></SpanIcon>
                </IconButton>
            </div>
            </Grid>
          
            <Grid className={classes.head} alignItems="center" justify="center" direction="row" container >
              <Grid item >
                <div>
                  <text style={{fontSize:'50px',
                 color:'white' , fontWeight:700}}>Mr.Toi</text>
                 </div>
              <Grid item >
              <text className={classes.textContent} >
                IoT is the best opportunity for career oriented creators as they 
                can learn,develop, build and understand system along with their own ideas and techniques
                </text>
                </Grid>
                 </Grid>
            </Grid>
            <Grid className={classes.readmore} item >
             <div className={classes.readbuttonBreak} >
              <Button size='large' onMouseEnter={this.handleButtonColor} 
              onClick={this.scrollBottom}
                onMouseLeave={this.handleButtonColor}
                style={{backgroundColor:this.state.buttonColor ,
                boxShadow:'#00a8bd',width:140 ,height:60 ,borderRadius:0}} >Read More</Button>
            </div>
            </Grid>

            <Grid className={classes.explore} item >  
             <div 
              style={{cursor:'pointer'}}>
              <text onClick={this.scrollBottom}  onMouseEnter={this.handleExplore} onMouseLeave={this.handleExplore}  style={{fontSize:18 ,color:this.state.exploreColor}} >Explore</text>
             </div>
              <div> 
                <ExpandMoreIcon  onClick={this.scrollBottom} style={{cursor:'pointer'}}
                 onMouseEnter={this.handleExplore} onMouseLeave={this.handleExplore}  style={{color:this.state.exploreColor,fontSize:30}} ></ExpandMoreIcon>
              </div>  
            </Grid>
        </Grid> 
        </div>
            <Drawer classes={{paper:classes.paper}} anchor="top" open={this.state.top} onClose={toggleDrawer('top', false)}>
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
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    headerContent:{
        marginTop:60
    },
    head:{
      marginTop:100
    },
    textStyle:{
      color:'white',
      fontSize:'20px',
      fontWeight:500,
      marginRight:30,
      marginTop:30,
      cursor:'pointer',
    },
    content:{  
      display:'flex',
    justifyContent:"center",
    margin:40
  },
  homeDisplay:{
    dispaly:'flex',
    textAlign:'right',
    marginTop:30,
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
      [theme.breakpoints.down('md')]:{
        paddingTop:10,
      },
    },
    readmore:{

      marginTop:85
    },
    spanDisplay:{
      display:'none',
      [theme.breakpoints.down('xs')]:{
        display:'flex',
        justifyContent:'flex-end',
        marginRight:25,
      },
    },
    explore:{
      marginTop:100,
      [theme.breakpoints.down("xs")]:{
      dispaly:'none',
      // bottom:-30
      }
      // justifyContent:'center'
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
    paper: {
      background: "rgba(0,0,0,0.6)"},
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
export default  withStyles(styles)(withRouter(Background_Page));
