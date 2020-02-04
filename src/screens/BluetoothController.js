import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import CourseDetails from '../components/CourseDetails'
import Image from '../imgs/BluetoothControlledRobot.jpg'
import TextStyle from '../components/Courses/TextStyle';
import List from '../components/Courses/List'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactDOM from 'react-dom'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Helmet} from 'react-helmet'
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
    }
  }
  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    // s.src="https://gist.github.com/mrtoi/4044cb1e82df2235e86039440e47f48d.js"
    s.innerHTML = "document.write('This is output by document.write()!')";
    this.instance.appendChild(s);
  }

  render(){
    
  // const string = /
    const {classes} = this.props;   
    return(
      <div className={styles.root}>
        {/* <CourseDetails headLine="Bluetooth Controlled Robot" description="Robots are always a fancy topic for students, hobbyists and DIYers. 
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
                <Helmet>
                <script src="https://gist.github.com/mrtoi/4044cb1e82df2235e86039440e47f48d.js"></script>
            </Helmet>componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);
}
          </div> */}
          
            <script dangerouslySetInnerHTML={{__html: `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://gist.github.com/mrtoi/4044cb1e82df2235e86039440e47f48d.js','ga');
  ga('send', 'pageview');
`}}
            
            type="text/babel" >
              
            </script>
            
            {/* <a href="https://gist.github.com/mrtoi/4044cb1e82df2235e86039440e47f48d.js" ></a> */}
            <div ref={el => (this.instance = el)} />
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
