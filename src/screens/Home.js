import React from 'react';
import {AppBar,Typography , Toolbar , Card , withStyles}from '@material-ui/core'
import {withRouter} from 'react-router-dom'
import AppHead from '../components/AppHead'
import backImage from '../imgs/back.jpg'
import HomeNav from '../components/HomeNav'
import Background_Page from '../components/Background_Page'
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import HomeNext from '../components/HomeNext'
import HomeCourse from '../components/HomeCourse'
import '../components/animation.css'
import Application from '../components/Application'
import {Animated} from 'react-animated-css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

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
<ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={500}>
            {this.state.visible && <HomeNav textColor="black"
                  iconcolor="#a2a2a2"
                  backColor="white" ></HomeNav>}
            
        </ReactCSSTransitionGroup>  
        <Background_Page/> 
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