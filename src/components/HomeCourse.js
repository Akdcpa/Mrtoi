import React from 'react';
import BlogList from '../components/BlogList'
import AppHead from '../components/AppHead'
import ParticlesBg from 'particles-bg'
import BlogHead from '../components/BlogHead'
import PropTypes from 'prop-types';
import {withStyles , Grid , Typography , Card , CardMedia , CardContent , Button} from '@material-ui/core'
import HomeNav from '../components/HomeNav'
import Contact_Page from '../components/Contact_Page'
import Mediapage from './MediaPage'
import video_clip from '../video/learning_preview.mp4'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import BluetoothController from '../imgs/BluetoothControlledRobot.jpg'
import LineFollower from  '../imgs/LineFollower.jpg'
import Obstacle from '../imgs/ObstacleAvoidingRobot.jpg'
import AutoRobot from '../imgs/Home-Automation-using-Local-Host.jpg'
import AddIcon from '@material-ui/icons/Add';
import CourseCard from './CourseCard'
class HomeCourse extends React.Component{

    constructor(props) {
      super(props)
    
      this.state = {
        blue_show:'none',
        obs_show:'none',
        auto_show:'none',
        line_show:'none',
        buttonColor:'#01bacf'
      }
    }
    handleBlue=(event)=>{
      if(event.type==='mouseenter'){
        this.setState({blue_show:'flex'})
      }
      else{
        this.setState({blue_show:'none'})
      }
    }
    handleObs=(event)=>{
      if(event.type==='mouseenter'){
        this.setState({obs_show:'flex'})  
      }
      else{
        this.setState({obs_show:'none'})
      }
    }
    handleAuto=(event)=>{
      if(event.type==='mouseenter'){
        this.setState({auto_show:'flex'})
      }
      else{
        this.setState({auto_show:'none'})
      }
    }
    handleLine=(event)=>{
      if(event.type==='mouseenter'){
        this.setState({line_show:'flex'})
      }
      else{
        this.setState({line_show:'none'})
      }
    }
    handleButtonColor=(event)=>{
      if(event.type==='mouseenter'){
        this.setState({buttonColor:'white'})
      }
      else{
        this.setState({buttonColor:"#01bacf"})
      }
    }
  render(){
    const {classes} = this.props;
    return(
      <div className={styles.root}>
          <Typography variant="h4" style={{fontWeight:'bold'}} >Recent Courses</Typography>
          <div style={{display:'flex' , justifyContent:'center' , marginTop:10}} >
              <Typography gutterBottom style={{minWidth:150 , maxWidth:900,fontFamily:'Droid Serif' ,
              fontStyle:'italic',fontWeight:10 , color:'#a2a2a2'}} >IoT allows us to use
               affordable wireless technology and transmit the data into the 
              cloud at a component level. It also provides a place to save data as well as management and security.</Typography>
        </div>
        <div  >
            <Grid container alignContent="center" justify='center' direction='row' >
                        <Grid item >
                          <CourseCard routePath="/Home/BluetoothController" title="Blutooth Car" image={BluetoothController} 
                          description="Control car moves by bluetooth" ></CourseCard>                          
                        </Grid>
                        <Grid item>
                        <CourseCard routePath="/Home/IotHome" title="IOT Home" image={AutoRobot} 
                          description="Automate your home" ></CourseCard>        
                        </Grid>
                            <Grid item>
                              <CourseCard routePath="/Home/LineFollower" title="Line Follower Robot" image={LineFollower} 
                          description="Line Follower Using Aurduino" ></CourseCard>  
                            </Grid>
                          
                            <Grid item>
                              <CourseCard routePath="/Home/ObstacleAvoid" title="Obstacle Avoiding vehicle" image={Obstacle} 
                            description="Aurduino and ultrasonic sensor" ></CourseCard>
                            </Grid>
                    </Grid>
              </div>
          <Button size='large' onMouseEnter={this.handleButtonColor} 
                onMouseLeave={this.handleButtonColor}
                style={{backgroundColor:this.state.buttonColor ,
                boxShadow:'#00a8bd',width:200 ,height:60 ,borderRadius:0 , marginTop:30}} >
              View All Courses</Button>
              <div style={{height:'20vh'}} ></div>
      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
    card:{
      maxWidth:'45vh'
    }
    
  });

HomeCourse.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeCourse);


