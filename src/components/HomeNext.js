import React from 'react';
import BlogList from '../components/BlogList'
import AppHead from '../components/AppHead'
import ParticlesBg from 'particles-bg'
import BlogHead from '../components/BlogHead'
import PropTypes from 'prop-types';
import {withStyles , Grid , Typography} from '@material-ui/core'
import HomeNav from '../components/HomeNav'
import Contact_Page from '../components/Contact_Page'
import Mediapage from './MediaPage'
import video_clip from '../video/learning_preview.mp4'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

// import {Player} from 'video-react'

class HomeNext extends React.Component{

    constructor(props) {
      super(props)
    
      this.state = {
         iotproject:[
            "Bluetooth Robot",
            "Line Follower",
            "Obstacle Avoiding Robot",
            "Home Automation",
            "Industry Automation",
            "Temperature logging",
            "LiquidLevel Monitor",
            "Smart Dustbin",
            "Car Parking System",
           " Biometric Lock",

         ]
      }
    }
  render(){
    const {classes} = this.props;
    return(
      <div className={styles.root}>
        <div style={{height:'20vh'}} ></div>
        <Grid  container  >
            <Grid align='center'  item>
              <div>
                <video className={classes.videoSize}  src={video_clip} autoPlay muted loop ></video>
              </div>
            </Grid> 
            <Grid  align='center' item>
                    <div   > 
                  <Typography style={{fontSize:29 ,textAlign:'left' ,fontWeight:'bolder',marginLeft:15 }} >We are a passionate learning </Typography>
                  <Typography style={{fontSize:29 ,textAlign:'justify',marginLeft:15 ,fontWeight:'bolder'}} >system from chennai. </Typography>
                <Grid className={classes.list} container >
                  <Grid justify="center"  item >
                    {
                      this.state.iotproject.slice(0,5).map((data , index)=>(
                        <div style={{marginLeft:20}} >
                          <li style={{float:'left' ,clear:'left', marginBottom:10,listStyle:"none"}} >
                            <DoneOutlineIcon style={{color:'blue'}} >
                            </DoneOutlineIcon>
                            {data}
                            </li>
                            
                            </div>
                      ))
                      }
                  </Grid>
                  <Grid justify="center" item>
                    {
                      this.state.iotproject.slice(5,10).map((data , index)=>(
                        <div className={classes.listAlign} > 
                          <li style={{ float:'left',marginBottom:10,listStyle:'none'}}  >
                             <DoneOutlineIcon style={{clear:'left',color:'blue',}} >
                            </DoneOutlineIcon>
                            {data}</li>
                         
                            </div> 
                      ))
                      }
                  </Grid>
                </Grid>
            </div>
            </Grid>
        </Grid>
        <div style={{height:'20vh'}} ></div>
      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
    list:{
      flexDirection: 'row',
      // [theme.breakpoints.down('xs')]:{
      //   flexDirection: 'column',

      // }
    },
    videoSize:{
      marginLeft:20,
      [theme.breakpoints.down("xs")]:{
       display: 'none',
      }
    },
    listAlign:{
      marginLeft:80,
     [theme.breakpoints.down('xs')]:{
        marginLeft:20
      }
    }
  });

HomeNext.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeNext);

