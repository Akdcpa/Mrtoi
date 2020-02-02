import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import CourseDetails from '../CourseDetails'
import Image from '../../imgs/BluetoothControlledRobot.jpg'
import TextStyle from './TextStyle';
import List from './List'
import Codes from './Codes'
class BluetoothController extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       items:[
        " Arduino UNO [Buy Here]",
        "L298N Motor Driver Module [Buy Here]",
        "HC-05 Bluetooth Module",
        "Robot Chassis",
        "4 x 5V Geared Motors",
        "Connecting Wires",
        "Battery Holder",
        "Power Supply",
        "Android Phone",
        "Bluetooth Controller App",
       ],
       code:[
                  "#include<SoftwareSerial.h>",
                  "   ",
                  "#define IN1 12",
                  "#define IN2 11",
                  "#define IN3 10",
                  "#define IN4 9",
                  "//#define EN1 6",
                  "//#define EN2 5",
                  " ",
                  "SoftwareSerial mySerial(2, 3);",
                  "// RX, TX",
                  "String data;",
                  "int btVal;",
                  " ",
                  "void setup() ",
                  " {  ",
                    "//Serial.begin(115200);",
                    "pinMode(IN1, OUTPUT);",
                    "pinMode(IN2, OUTPUT);",
                    "pinMode(IN3, OUTPUT);",
                    "pinMode(IN4, OUTPUT);",
                    "//pinMode(EN1, OUTPUT);",
                    "//pinMode(EN2, OUTPUT);",
                    "digitalWrite(IN1, LOW);",
                    "digitalWrite(IN2, LOW);",
                    "digitalWrite(IN3, LOW);",
                    "digitalWrite(IN4, LOW);",
                    "//analogWrite(EN1,63);",
                    "//analogWrite(EN2,63);",
                    "mySerial.begin(9600);",
                "  }",
                  " ",
                  "void loop()",
                  "{",
                  "while, (mySerial.available())",
                  "{  ",
                  "  {  ",
                        "data = mySerial.readStringUntil('\n');",
                        "//Serial.print(str);             ",
                    "}",
                    " ",
                    "btVal = (data.toInt());",
                    "//Serial.print('BlueTooth Value');",
                    "//Serial.println(btVal);",
                    " ",
                    " ",
                    " ",
                    "switch (btVal) ",
                    "{",
                        "case 1:",
                          "//Serial.println('Forward');",
                          "forward();",
                          "break;",

                        "case 2:        ",
                        "//Serial.println('Reverse');",
                          "reverse();",
                          "break;",

                        "case 3:",
                        "//Serial.println('Left');",
                          "left();",
                          "break;",
                          
                        "case 4:",
                          "//Serial.println('Right);",
                          "right();",
                          "break;",
                          
                        "case 5:",
                          "//Serial.println('Stop');",
                          "stoprobot();",
                          "break;      ",
                    " ",
                    "}",
                    " ",
                  "} ",
                  " ",
                  " ",
                                                                                
                    "if (mySerial.available() < 0)",
                      "{",
                      "//Serial.println('No Bluetooth Data');",
                      "}",
                  " ",
                  "}",
                  " ",
                  "void forward()",
                  "{",
                    "digitalWrite(IN1, HIGH);",
                    "digitalWrite(IN2, LOW);",
                    "digitalWrite(IN3, HIGH);",
                    "digitalWrite(IN4, LOW);",
                  "}",

                  "void reverse()",
                  "{",
                    "digitalWrite(IN1, LOW);",
                    "digitalWrite(IN2, HIGH);",
                    "digitalWrite(IN3, LOW);",
                    "digitalWrite(IN4, HIGH);",
                  "}",

                  "void left()",
                  "{",
                    "digitalWrite(IN1, LOW);",
                    "digitalWrite(IN2, LOW);",
                    "digitalWrite(IN3, HIGH);",
                    "digitalWrite(IN4, LOW);",
                  "}",

                  "void right()",
                  "{",
                    "digitalWrite(IN1, HIGH);",
                    "digitalWrite(IN2, LOW);",
                    "digitalWrite(IN3, LOW);",
                    "digitalWrite(IN4, LOW);",
                  "}",

                  "void stoprobot()",
                  "{",
                    "digitalWrite(IN1, LOW);",
                    "digitalWrite(IN2, LOW);",
                    "digitalWrite(IN3, LOW);",
                    "digitalWrite(IN4, LOW);",
                  "}",
       ]
    }
  }
  
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
                      {/* <Codes code={this.state.code} ></Codes> */}
                      <script src="https://gist.github.com/elktros/85acce5c098c4bd579727b57e21610d3.js" ></script> 
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
                                <List items={this.state.items} ></List>
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
        marginLeft:50,
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
      }

  });

BluetoothController.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(BluetoothController);
