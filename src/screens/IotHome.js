import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import CourseDetails from '../components/CourseDetails'
import Image from '../imgs/Home-Automation-using-Local-Host.jpg'
import TextStyle from '../components/Courses/TextStyle';
import List from '../components/Courses/List'
class IotHome extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       items:[
       "Nodemcu and its pin description and GPIOs",
       "Setting up Arduino IDE for Nodemcu",
       "Programming Nodemcu with Arduino IDE",
       "To create a webserver on Nodemcu",
       "To transfer data and to get response on from a webserver",
       "Working of Relay Module",
       "Interfacing Relay Modules",
       "16×2 LCD screen and interfacing I2C module with Nodemcu",
       ]
    }
  }
  
  render(){
    const {classes} = this.props;   
    return(
      <div className={styles.root}>
        <CourseDetails headLine="Home Automation" description="What if I told you that you can program the lightening (dimming, flickering) 
        at the touch of your smartphone? If you are a TV series binge-watcher 
        or movie enthusiast, you understand the lighting issue….."
         image={Image} />
          <div className={classes.content} >
                <TextStyle title="DESCRIPTION"
                        description=" What if I told you that you can program the lightening (dimming, flickering) at the touch of your smartphone? If you are a TV series binge-watcher or movie enthusiast, you understand the lighting issue, it should be not too bright nor too dim, and there is a perfect balance between the two.
                        All you need is a Wi-Fi connection, all the switchboards in your house are connected to the Wi-Fi hotspot, all you need to do connect to them and program them in accordance to your need and mood. With home automation, you can do this. We present before you the Home Automation system that is controlled by any smart
                        device using an IP design and developed by Mr.toi."
                  ></TextStyle>
                <Grid spacing={5} className={classes.bottomGrid}  container >
                        <Grid item>
                             <div style={{marginTop:10}} >
                         <TextStyle title="AIM"
                        description="  The aim of the project is to create a Home Automation system using a Wifi module with in-built 
                        micro-controller and creating a web server on it and operate the devices using any smartphone or laptop.
                        We will be using a wifi module with a built-in micro-controller unit as the basic microprocessor for this
                        project."
                  ></TextStyle> 
                             </div>   
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
      // [theme.breakpoints.down('xs')]:{
      //   textAlign:'center',
      //   float:'left'
      //   }
    }
  
  });

IotHome.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(IotHome);
