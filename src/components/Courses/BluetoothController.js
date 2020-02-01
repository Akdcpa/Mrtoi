import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import CourseDetails from '../CourseDetails'
import Image from '../../imgs/BluetoothControlledRobot.jpg'
import TextStyle from './TextStyle';
class BluetoothController extends React.Component{
  render(){
    const {classes} = this.props;   
    return(
      <div className={styles.root}>
        <CourseDetails headLine="Bluetooth Controlled Robot" description="Robots are always a fancy topic for students, hobbyists and DIYers. 
        If you are beginner, then building a robot (like a car or an arm) is probably one of the important projects to do after
        learning about the basics. If you remember the earlier tutorial, I have discussed about HC-05 Bluetooth Module and how to 
        interface one with Arduino. Also, I have provided a simple Bluetooth Controller App, which can be installed on your Android
        Phone and start transmitting the data. As a continuation to that project, I will be implementing Bluetooth Controlled Robot 
        using Arduino and a few other components and build a simple robotic car that can be controlled using an Android Phone 
        (through an App) over Bluetooth Communication..….. "
         image={Image} />
          <div className={classes.content} >
              <Typography variant="h6" style={{fontFamily:"Open Sans Condensed",float:'left',}} >
                  DESCRIPTION</Typography>
                <Grid direction="column" spacing={3} justifyContent="flex-start" container >
                    <Grid item >
                        <TextStyle title="CIRCUIT DESIGN" 
                        description=" I wouldn’t go into the details of the construction of the robot as your robot chassis might be different from mine and you can easily figure it out 
                        how to build the robot from the available parts and possible cable management for making the robot more appealing. Coming to the design of the circuit, 
                        first is the HC-05 Bluetooth Module. The +5V and GND pins of the Bluetooth Module are connected to +5V and GND of Arduino. Since I will be only transmitting data related to
                         the Robot’s movement from Android Phone to Bluetooth Module and do not intend to receive any data from Arduino, I will connect only the TX pin of the Bluetooth Module to RX Pin of Arduino. 
                         This RX pin of Arduino is based on SoftwareSerial library (Pin 2 and Pin 3 are configured as RX and TX on Arduino). The RX pin of the Bluetooth is left open. Now, the L298N Motor Driver Module.
                          Digital I/O Pins 9 through 12 of Arduino are configured as Input pins of the Motor Driver and are connected to IN1 through IN4 of the L298N Motor Driver Module. Both the Enable Pins are connected 
                          to 5V through provided jumper. The robot chassis which I am using in this Bluetooth Controlled Robot Car project is supplied with 4 geared motors. Since L298N has slots for only two motors, 
                          I have joined the left side motors as one set and the right side motors as other set and connected both these sets to the output of L298N Module."
                        ></TextStyle>
                        <TextStyle title="CODE" 
                        description="The Arduino code for Bluetooth Controlled Robot project is given below."
                        ></TextStyle>
                    </Grid>
                </Grid>
                <Grid spacing={5} className={classes.bottomGrid}  container >
                        <Grid item>
                    
                        <TextStyle title="AIM" 
                        description="  In this project, I will show you how to design and develop a 
                        Bluetooth Controlled Robot using Arduino, HC-05 Bluetooth Module and L298N Motor Driver Module. 
                        On the other end of the Bluetooth Communication,
                         I will be using a Smart Phone and a simple Android App to control the Robotic Car. "
                        ></TextStyle>  
                        </Grid>
                        <Grid item >
                           <div style={{clear:'left',textAlign:'justify',float:'left',marginTop:10}} >
                              <Typography style={{clear:'left',float:'left',fontWeight:'bolder',marginTop:10}}  >YOU WILL LEARN ABOUT</Typography>
                              <div style={{marginLeft:40,clear:'left',float:'left'}} >
                    
                            <li> Arduino UNO [Buy Here]</li>
                            <li>L298N Motor Driver Module [Buy Here]</li>
                            <li>HC-05 Bluetooth Module</li>
                            <li>Robot Chassis</li>
                            <li>4 x 5V Geared Motors</li>
                            <li>Connecting Wires</li>
                            <li>Battery Holder</li>
                            <li>Power Supply</li>
                            <li>Android Phone</li>
                            <li>Bluetooth Controller App</li>
                            </div>
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
        marginLeft:90,
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

BluetoothController.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(BluetoothController);
