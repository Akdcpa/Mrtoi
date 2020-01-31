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
        <div style={{height:'20vh'}} ></div>
        <Grid  container xs >
            <Grid xs align='center'  item>
              <div>
                <video  src={video_clip} autoPlay muted loop ></video>
              </div>
            </Grid> 
            <Grid  align='center' xs item>
                    <div   > 
                  <Typography style={{fontSize:29 , fontWeight:'bolder' , alignItem:'flex-start' }} >We are a passionate learning  </Typography>
                  <Typography style={{fontSize:29 , fontWeight:'bolder'}} >system from chennai. </Typography>
                <Grid xs container >
                  <Grid justify="center" xs item >
                    {
                      this.state.iotproject.slice(0,5).map((data , index)=>(
                        <div style={{marginLeft:20}} >
                          <Typography style={{float:'left' , marginBottom:10}} >
                            <DoneOutlineIcon style={{color:'blue'}} >
                            </DoneOutlineIcon>
                            {data}
                            </Typography>
                            <br></br>
                            <br></br>
                            {/* <br></br> */}

                            </div>
                      // <ul style={{marginLeft:0 , paddingLeft:0 , float:'left'}} >
                      // <li>{data}</li>
                      // </ul>
                      ))
                      }
                  </Grid>
                  <Grid justify="center" xs item>
                    {
                      this.state.iotproject.slice(5,10).map((data , index)=>(
                        <div> <Typography style={{ float:'left'}} gutterBottom >
                             <DoneOutlineIcon style={{color:'blue'}} >
                            </DoneOutlineIcon>
                            {data}</Typography>
                            <br></br>
                            <br></br>

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
  });

HomeNext.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeNext);

