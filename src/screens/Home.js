import React from 'react';
import {AppBar,Typography , Toolbar , Card , withStyles}from '@material-ui/core'
import {withRouter} from 'react-router-dom'
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
import HomeCourse from '../components/HomeCourse'
import SpanIcon from '../components/SpanIcon'
import Application from '../components/Application'
import {Animated} from 'react-animated-css'
import {Link  , animateScroll as scroll , Events , Element , scrollSpy , scroller } from "react-scroll"
class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
       scrollEvent:false,
       textHide:true,
       visible:false
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop >30) {
        this.state.visible=true;
          this.state.scrollEvent = true ;
          this.setState({scrollEvent:true })
          // this.setState({textHide:false })

      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop<30) {
        this.state.visible=false;
        this.state.scrollEvent = false ;
          this.setState({scrollEvent:false})
          // this.setState({textHide:true })
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
    scroll.scrollToBottom();
  }
  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render(){
    const {classes} = this.props;
    return(
      <div className={styles.root}>
        <AppHead/>
        {
              this.state.scrollEvent?<HomeNav textColor="black"
              iconcolor="#a2a2a2"
              backColor="white" ></HomeNav>:null
            }
   {/* <Animated animationIn="fadeInDown" animationOut="fadeInUp"
            animationInDuration={400} animationOutDuration={400} isVisible={true}
            > 
            <HomeNav textColor="black"
              iconcolor="#a2a2a2"
              backColor="white" />
          
             </Animated> */}
        {/* <HomeNav  backColor="white" textColor="black" /> */}

        {/* <HomeNav/> */}
        <Background_Page/>
        {/* <Link to={Background_Page} /> */}
        {/* <SpanIcon/> */}
        <HomeNext/>
        <HomeCourse/> 
         <Application/>
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
export default withStyles(styles)(withRouter(Home));