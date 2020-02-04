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
import {withRouter , Redirect} from 'react-router-dom'

class CourseCard extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
        overlay:"none"
      }
    }
    handleEvent=(event)=>{
      if(event.type==='mouseenter'){
        this.setState({overlay:'flex'})
      }
      else{
        this.setState({overlay:'none'})
      }
    }
  render(){
    const {classes} = this.props;
    return(
      <div className={styles.root}>
        <div style={{ paddingTop:40}} >
                          <Card className={classes.card} >
                              <CardMedia onMouseEnter={this.handleEvent}  onMouseLeave={this.handleEvent}
                          className={classes.cardMedia}
                          style={{  
                          
                            backgroundImage:`url(${this.props.image})`,
                             }} >
                            <div
                            className={classes.overlayStyle}
                            onClick={()=>this.props.history.push(this.props.routePath)}
                            style={{display:this.state.overlay }} 
                            >
                             <AddIcon style={{color:'white' , width:40 , height:40}} />
                            </div>
                              </CardMedia>
                              <CardContent>
                              <Typography gutterBottom variant="body1" component="h2">
                                    {this.props.title}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary">
                                      {this.props.description}
                                  </Typography>
                              </CardContent>
                          </Card>
              </div>
      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
    card:{
      width:'47vh',
      marginRight:20,
      [theme.breakpoints.down('xs')]:{
        maxWidth:'40vh'
      }
      
    },
    overlayStyle:{
      backgroundColor: 'rgba(0, 0, 0, 0.6)' ,
      height:'24vh' ,
      width:'40vh' ,
      display:"flex",
      alignItems:'center',
      justifyContent:'center',
      [theme.breakpoints.down('xs')]:{
        height:'23vh' ,
      width:'33vh' ,
      }
      // margin:20
    },
    cardMedia:{
      height: '30vh',
      width:'100%',
      borderRadius:0,
      cursor:'pointer',
      backgroundPosition: 'center',display:'flex',
      backgroundSize: 'cover',alignItems:'center' , justifyContent:'center',
      // padding:20

    }
    
  });

CourseCard.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(CourseCard));


