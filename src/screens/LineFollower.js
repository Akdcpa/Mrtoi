import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent, Paper} from '@material-ui/core'
import PropTypes from 'prop-types'
import CourseDetails from '../components/CourseDetails'
import Image from '../imgs/LineFollower.jpg'
import TextStyle from '../components/Courses/TextStyle';
import List from '../components/Courses/List'
class LineFollower extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       learn:[
        "Line Sensor",
        "Arduino",
        "Motor driver",
        "Chassis",
        "Cables",
        "Breadboard",
        "Battery",
       ],
       parts:[
        "Chassis (including motors and wheels )",
        " Arduino Uno r3",
        " L293D Motor Shield",
        " IR Proximity Sensors (pair)",
        " Jumper Wires",
        " Switch",
        " 4AA Battery Holder",
       ],
       tools:[
       "Soldering Iron",
        "Hot Glue Gun pog",
        "Screw Driver",
       ]
    }
  }
  
  render(){
    const {classes} = this.props;   
    return(
      <div className={styles.root}>
        <CourseDetails headLine="Line Follower" description="In this instructable, I will teach you how to make a line follower robot using Arduino, which is a very common microcontroller board. The robot will use two infrared 
        proximity sensors to detect the line and on the basis of input received from the sensors, 
        the Arduino will direct the motors to move with the help of a motor shield.…."
         image={Image} />
          <div className={classes.content} >
                <Grid  direction="column" spacing={3}  container >
                    <Grid item >
                    <div style={{textAlign:'left'}} ><Typography variant="h6" style={{fontFamily:"Open Sans Condensed"}} >
                  DESCRIPTION</Typography></div> 
                        <TextStyle title="STEP 1: THE WORKING"
                        description="So there will be infrared proximity sensors placed on either side at the front of the robot. There are four possible sensor outcomes:-"
                        ></TextStyle>
                        <TextStyle title="CASE 1:-"
                        description="In this case, both the sensors don't detect the line. Both the motors 
                        rotate forward. As a result, the car moves forward."
                        ></TextStyle>
                        <TextStyle title="CASE 2:-"
                        description="In this case, only the left sensor detects the line which means that the car requires to turn in the left direction.
                        The left motor rotates backward and the right motor rotates forward. As a result, the car turns left."
                        ></TextStyle>
                         <TextStyle title="CASE 3:-"
                        description="In this case, only the right sensor detects the line which means that the car requires to turn in the right direction. 
                        The left motor rotates forward and the right motor rotates backward. As a result, the car turns right."
                        ></TextStyle>
                         <TextStyle title="CASE 4:-"
                        description="In this case, both the sensors detect the line. This means that the end has come. Both the motors stop rotating. As a result, the car stops.
                        is the working structure of our robot..."
                        ></TextStyle>
                    </Grid>
                    <Grid item >
                    <div  style={{textAlign:'justify',marginTop:10}} > 
                        <TextStyle title="STEP 2: PARTS REQUIRED"
                        description="THE PARTS REQUIRED TO BUILD THE ROBOT ARE AS FOLLOWS :-"
                        ></TextStyle>
                          <List items={this.state.parts} ></List>
                            <Typography style={{fontFamily:'',textAlign:'justify',fontWeight:'bold',clear:'left',float:'left',marginTop:10}} >TOOLS REQUIRED :-</Typography>
                            <br></br>
                            <List items={this.state.tools} ></List>
                            <Typography style={{fontFamily:'',textAlign:'justify',fontWeight:'bolder',clear:'left',float:'left',marginTop:10    }} >Gather these parts and be ready for the next step ...</Typography>
                        </div>
                    </Grid>
                    <Grid item >
                        <TextStyle title="STEP 3: ASSEMBLE THE CHASSIS"
                        description=" Most of the chassis come with an instruction manual and even mine came with it so have a look at it and build your chassis accordingly.
                        Then, attach the components to the chassis. Arduino, with the motor shield attached to it and also the battery holder must be fixed on the chassis. Also, 
                        attach the proximity sensors at the front on either side, facing down. Make sure that they are attached at the corners... Attach the switch too...
                        Solder wires to the motors and also switch and keep ready..."
                        ></TextStyle>
                    </Grid>                   
                </Grid>
                <Grid spacing={5} className={classes.bottomGrid}  container >
                        <Grid item>
                             <TextStyle title="AIM"
                        description=" The purpose of the line follower robot is to follow a line. 
                        The robot will only follow a line that is black against a white background or 
                        a white line against a black background. This is so that the sensors can distinguish
                         a clear difference in light and so the robot can trace and follow the line."
                        ></TextStyle>
                        </Grid>
                        <Grid item >
                           <div style={{clear:'left',textAlign:'justify',float:'left',marginTop:10}} >
                              <Typography style={{clear:'left',float:'left',fontWeight:'bolder',marginTop:10}}  >YOU WILL LEARN ABOUT</Typography>
                              <List items={this.state.learn} ></List>
                            </div>
                        </Grid>
                </Grid>  
          </div>
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
        // marginLeft:50,
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

LineFollower.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(LineFollower);
