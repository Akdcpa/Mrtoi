import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import Learning from '../imgs/Learning.png'
import Dashboard from '../imgs/dashboard.png'
import Iot from '../imgs/iot.png'

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
        <Grid alignContent="center" justify='center' className={classes.rootGrid} direction="row" align container spacing={2} >
            <Grid item  >
            <Card className={classes.sideCard} >
            <img style={{width:'96px' , height:'96px'}} src={Learning} ></img>
            <CardContent>
                <Typography className={classes.text} variant="h5" >Learnig Systems</Typography>
                <Typography>IoT devices give students and they give teachers the ability 
                    to measure student learning progress in real-time 
                    training are included to Mr.toi</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item >
               <Card className={classes.middleCard} >
                <img src={Iot} ></img>
                <CardContent>
                <Typography  className={classes.text}variant="h5" >Iot software requirements and uses</Typography>
                <Typography>The Arduino Integrated Development Environment
                     is a cross-platform application that is written in functions from C and C++. 
                     It is used to write and upload programs to Arduino compatible boards, 
                    but also, with the help of 3rd party cores, other vendor development boards </Typography>
            </CardContent>
               </Card>
            </Grid>
            <Grid item >
           <Card className={classes.sideCard} ><img src={Dashboard} ></img>
                <CardContent>
                        <Typography  className={classes.text}variant="h5" >User Dashboard</Typography>
                        <Typography>With the help of IoT Dashboards, users and operators can
                             (remotely) monitor and control an environment from anywhere 
                             in the world.</Typography>
                </CardContent>
            </Card>
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
    sideCard:{
        minWidth:100,
        maxWidth:350,
        borderRadius: 0,
        minHeight:400,

    },
    middleCard:{
        minWidth:350,
        maxWidth:500,
        borderRadius: 0,
        maxHeight:500,
        minHeight:400,


    },
    rootGrid:{
        marginTop:-60,
    }
  });

Application.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(Application);
