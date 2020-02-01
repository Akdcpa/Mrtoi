import React from 'react';
import BlogList from '../components/BlogList'
import AppHead from '../components/AppHead'
import ParticlesBg from 'particles-bg'
import BlogHead from '../components/BlogHead'
import BottomFooter from '../components/BottomFooter'
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
        <div style={{ paddingTop:40}} >
            <Grid style={{padding:20}} spacing={2}  container alignContent="center" justify='center' direction='row' >
                        <Grid item >
                          <Card className={classes.card} >
                              <CardMedia onMouseEnter={this.handleBlue}  onMouseLeave={this.handleBlue} className={classes.blueStyle} >
                                    <div style={{display:this.state.blue_show,backgroundColor: 'rgba(0, 0, 0, 0.6)' , height:'30vh' , width:'40vh' , alignItems:'center' , justifyContent:'center' }} >
                                      <AddIcon style={{color:'white' , width:40 , height:40}} />
                                    </div>
                              </CardMedia>
                              <CardContent>
                              <Typography gutterBottom variant="h6" component="h2">
                                    Blutooth Car
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">Control car moves by bluetooth
                                  </Typography>

                              </CardContent>
                          </Card>
                          
                        </Grid>
                        <Grid item>
                          <Card className={classes.card}  >
                          <CardMedia onMouseEnter={this.handleAuto}  onMouseLeave={this.handleAuto} className={classes.autoStyle} >
                            <div style={{display:this.state.auto_show ,backgroundColor: 'rgba(0, 0, 0, 0.6)' , height:'30vh' ,width:'40vh' , alignItems:'center' , justifyContent:'center' }} >
                              <AddIcon style={{color:'white' , width:40 , height:40}} />
                            </div>
                          </CardMedia>
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                    IOT Home
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">Automate your home
                                  </Typography>

                            </CardContent>
                          </Card>
                         
                        </Grid>
                            <Grid item>
                              <Card className={classes.card}  >
                              <CardMedia onMouseEnter={this.handleLine}  onMouseLeave={this.handleLine} className={classes.lineStyle} >
                                <div style={{display:this.state.line_show ,backgroundColor: 'rgba(0, 0, 0, 0.6)' , height:'30vh' , width:'40vh' , alignItems:'center' , justifyContent:'center' }} >
                                <AddIcon style={{color:'white' , width:40 , height:40}} />
                                </div>
                              </CardMedia>
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                    Line Follower Robot
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">Line Follower Using Aurduino
                                  </Typography>

                                </CardContent>
                              </Card>
                            
                            </Grid>
                          
                            <Grid item>
                              <Card className={classes.card}  >
                              <CardMedia  onMouseEnter={this.handleObs}  onMouseLeave={this.handleObs}  className={classes.obsStyle} >
                                <div style={{display:this.state.obs_show ,backgroundColor: 'rgba(0, 0, 0, 0.6)' , height:'30vh' , width:'40vh' , alignItems:'center' , justifyContent:'center' }} >
                                <AddIcon style={{color:'white' , width:40 , height:40}} />
                                </div>
                            </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h2">Obstacle Avoiding vehicle
                                        </Typography>
                                      <Typography variant="body2" color="textSecondary" component="p"> Aurduino and ultrasonic sensor</Typography>
                                </CardContent>
                              </Card>
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
    blueStyle:{
                backgroundImage:`url(${BluetoothController})`,
                height: '30vh',
                width:'40vh',
                borderRadius:0,
                cursor:'pointer',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                padding:20
    },
    autoStyle:{
      backgroundImage:`url(${AutoRobot})`,
                height: '30vh',
                width:'40vh',
                borderRadius:0,
                cursor:'pointer',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                padding:20
    },
    lineStyle:{
      backgroundImage:`url(${LineFollower})`,
      height: '30vh',
      width:'40vh',
      cursor:'pointer',
      borderRadius:0,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      padding:20
    },
    obsStyle:{
      backgroundImage:`url(${Obstacle})`,
      height: '30vh',
      width:'40vh',
      borderRadius:0,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      padding:20,
      cursor:'pointer',

    },
    card:{
      maxWidth:'45vh'
    }
    
  });

HomeCourse.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(HomeCourse);


