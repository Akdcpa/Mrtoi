import React from 'react';
import BlogList from '../components/BlogList'
import AppHead from '../components/AppHead'
import ParticlesBg from 'particles-bg'
import BlogHead from '../components/BlogHead'
import BottomFooter from '../components/BottomFooter'
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
        <Grid  container >
            <Grid  align='center'  item  md>
              <div style={{paddingTop:60 ,}} >
                <video  src={video_clip} autoPlay muted loop ></video>
              </div>
            </Grid> 
            <Grid item md >
                    <div  style={{paddingTop:60 ,}} > 
                  <Typography style={{fontSize:29 , fontWeight:'bolder' , alignItem:'flex-start' , backgroundColor:' #42adf8 '}} >We are a passionate learning  </Typography>
                  <Typography style={{fontSize:29 , fontWeight:'bolder', backgroundColor:' #42adf8 '}} >system from chennai. </Typography>
                <Grid container >
                  <Grid  item xs >
                    {
                      this.state.iotproject.slice(0,5).map((data , index)=>(

                          <Typography style={{padding:13}} >
                            <DoneOutlineIcon style={{color:'blue'}} >
                            </DoneOutlineIcon>
                            {data}
                            </Typography>
                      
                      ))
                      }
                  </Grid>
                  <Grid item xs >
                    {
                      this.state.iotproject.slice(5,10).map((data , index)=>(
                          <Typography gutterBottom style={{padding:13 }} >
                             <DoneOutlineIcon style={{color:'blue'}} >
                            </DoneOutlineIcon>
                            {data}</Typography>
                      ))
                      }
                  </Grid>
                </Grid>
            </div>

            </Grid>
        </Grid>
      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
  });

HomeNext.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeNext);
