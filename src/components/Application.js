import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import Learning from '../imgs/Learning.png'
import Dashboard from '../imgs/dashboard.png'
import Iot from '../imgs/iot.png'
import ApplicationCard from './ApplicationCard'
class Application extends React.Component{
  render(){
    const {classes} = this.props;   
    return(
      <div className={styles.root}>
        <div className={classes.blackDiv} >
            <Typography className={classes.headLine}  variant="h4" >
                Howdy, Mr.toi, we have brought together the best quality offers, projects for you!
            </Typography>
        </div>
        <Grid alignItems="center" justify='center' className={classes.rootGrid} align container >
            <Grid item  >
            <ApplicationCard title="Learnig Systems" description="IoT devices give students and they give teachers the ability 
                    to measure student learning progress in real-time 
                    training are included to Mr.toi" image={Learning} ></ApplicationCard>
            </Grid>
            <Grid item  >
            <ApplicationCard title="Iot software requirements and uses" description="The Arduino Integrated Development Environment
                     is a cross-platform application that is written in functions from C and C++. 
                     It is used to write and upload programs to Arduino compatible boards, 
                    but also, with the help of 3rd party cores, other vendor development boards" image={Iot} ></ApplicationCard>
            </Grid>
            <Grid item  >
                <ApplicationCard title="User Dashboard" description="With the help of IoT Dashboards, users and operators can
                             (remotely) monitor and control an environment from anywhere 
                             in the world." image={Dashboard} >
                </ApplicationCard>
            </Grid>
        </Grid>
      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
        // display:'flex',
    },
    blackDiv:{
        height:250,
        width:"100%",
        backgroundColor:'black',
        display:'flex',
        justifyContent: 'center',
    },
    headLine:{
        color:'white' , 
        maxWidth:1000,
        minWidth:100,
        fontWeight: 'bold',
        fontFamily: 'inherit',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:40,
    },
    text:{ 
        fontWeight: 'bold',
        fontFamily: '',
    },
    rootGrid:{
        marginTop:-60,
        flexDirection: 'row',
        [theme.breakpoints.down('md')]:{
          marginTop:0,
          // marginLeft:10,
          // display:'fle'
          flexDirection: 'column',

        }
    }
  });

Application.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(Application);
