import React from 'react';
import {Typography , withStyles ,Paper, Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import Learning from '../imgs/Learning.png'
import Dashboard from '../imgs/dashboard.png'
import Iot from '../imgs/iot.png'

class ApplicationCard extends React.Component{
  render(){
    const {classes} = this.props;   
    return(
      <div className={styles.root}>
            <Paper elevation={8} className={classes.sideCard} >
            <img style={{width:'96px',height:'96px',marginTop:50}} src={this.props.image} ></img>
            <CardContent>
                <Typography className={classes.text} variant="h5" >{this.props.title}</Typography>
        
                <Typography style={{textAlign:'justify'}} >{this.props.description}</Typography>
            </CardContent>
            </Paper>
      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
        // display:'flex',
    },
    text:{ 
        fontWeight: 'bold',
        fontFamily: '',
    },
    sideCard:{
        minWidth:200,
        maxWidth:380,
        borderRadius: 0,
        minHeight:400,
        maxHeight:400,
        marginRight:30,
        [theme.breakpoints.down("xs")]:{
          marginRight:0,

        }

    },
    rootGrid:{
        marginTop:-60,
    }
  });

ApplicationCard.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(ApplicationCard);
