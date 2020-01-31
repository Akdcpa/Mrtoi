import React from 'react';
import BlogList from '../components/BlogList'
import AppHead from '../components/AppHead'
import ParticlesBg from 'particles-bg'
import BlogHead from '../components/BlogHead'
import BottomFooter from '../components/BottomFooter'
import PropTypes from 'prop-types';
import {withStyles , Grid , Typography , Card , CardMedia} from '@material-ui/core'
import HomeNav from '../components/HomeNav'
import Contact_Page from '../components/Contact_Page'
import Mediapage from '../components/MedaiPage'
import video_clip from '../video/learning_preview.mp4'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BluetoothController from '../imgs/BluetoothControlledRobot.jpg'
import LineFollower from  '../imgs/LineFollower.jpg'
import Obstacle from '../imgs/ObstacleAvoidingRobot.jpg'
import AutoRobot from '../imgs/Home-Automation-using-Local-Host.jpg'

// import {Player} from 'video-react'

class HomeCourse extends React.Component{

    constructor(props) {
      super(props)
    
      this.state = {
      }
    }
  render(){
    const {classes} = this.props;
    return(
      <div className={styles.root}>
          <Typography variant="h4" style={{fontWeight:'bold'}} >Recent Courses</Typography>
          <div style={{display:'flex' , justifyContent:'center' , }} >
              <Typography   >IoT allows us to use
               affordable wireless technology and transmit the data into the 
              cloud at a component level. It also provides a
               </Typography>
              <Typography   >place to save data as well as management and security.</Typography>
        </div>
        <Grid spacing={2}  container direction='row' >
        <Grid item xs >
            <Card>
                <CardMedia 
                //  className={classes.media}
                 image={BluetoothController}
                 title="BluetoothCOntroller"
                ></CardMedia>
            </Card>
            {/* <img src={BluetoothController} ></img> */}
        </Grid>
        <Grid item xs>
        <img src={LineFollower} ></img>
        </Grid>
        <Grid item xs>
        <img src={Obstacle} ></img>
        </Grid>
        <Grid item xs>
        <img src={AutoRobot} ></img>
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

HomeCourse.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeCourse);
