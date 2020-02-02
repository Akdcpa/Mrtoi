import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import CourseDetails from '../components/CourseDetails'
import Image from '../imgs/ObstacleAvoidingRobot.jpg'
import TextStyle from '../components/Courses/TextStyle';
import List from '../components/Courses/List'
class ObstacleAvoid extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       items:[
        "You’ll learn about.",
        "Arduino NANO or Uno (any version)",
        "HC-SR04 Ultrasonic Sensor",
        "LM298N Motor Driver Module",
        "5V DC Motors",
        "Battery",
        "Wheels",
        "Chassis",
        "Jumper Wires",
       ]
    }
  }
  
    render(){
        const {classes} = this.props;
        return(
        <div style={{textAlign:'justify',marginTop:10}} > 
                           <CourseDetails headLine="Line Follower" description="In this instructable, I will teach you how to make a line follower robot using Arduino, which is a very common microcontroller board. The robot will use two infrared 
        proximity sensors to detect the line and on the basis of input received from the sensors, 
        the Arduino will direct the motors to move with the help of a motor shield.…."
         image={Image} />
         <div className={classes.content} >
                        <Grid spacing={5} className={classes.bottomGrid}  container >
                        <Grid item>
                            <TextStyle title="AIM"
                        description="The objective of having obstacle avoiding robot is to enable autonomous 
                        functioning without human supervision. ... IR sensors are widely used for measuring distances, 
                        so they can be used in robotics for obstacles avoidance. 
                        IR sensors are also faster in response time than ultrasonic sensors [17]. "
                        ></TextStyle>
                        </Grid>
                        <Grid item >
                           <div style={{clear:'left',textAlign:'justify',float:'left',marginTop:10}} >
                              <Typography style={{clear:'left',float:'left',fontWeight:'bolder',marginTop:10}}  >YOU WILL LEARN ABOUT</Typography>
                            <List items={this.state.items} ></List>

                            </div>
                        </Grid>
                </Grid>  </div>
                        </div>
        );
    }
}

const styles =theme=>({
    root:{
        flexGrow: 1,
       
    },
    content:{
        margin:40,
        marginLeft:60,
        [theme.breakpoints.down('sm')]:{
            margin:10,
        }
    },
    bottomGrid:{
      flexDirection: 'row',
      [theme.breakpoints.down('xs')]:{
      flexDirection: 'column',
      }
    },
    description:{
      fontFamily:'Droid Serif',
      clear:'left',
      textAlign:'justify',
      fontWeight:'lighter',
      clear:'left',
      float:'left',
      marginTop:10,
      // [theme.breakpoints.down('xs')]:{
      //   textAlign:'center',
      //   float:'left'
      //   }
    }
  
  });

ObstacleAvoid.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(ObstacleAvoid);
