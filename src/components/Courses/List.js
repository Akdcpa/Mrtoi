import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
import TextStyle from './TextStyle'
import CourseDetails from '../CourseDetails'
import Image from '../../imgs/ObstacleAvoidingRobot.jpg'
class List extends React.Component{
    render(){
        const {classes} = this.props;
        return(
         <div className={classes.content} >
                {
                    this.props.items.map((value,index)=>(
                        <div style={{marginLeft:40,clear:'left',float:'left'}} >
                            <li>{value}</li>
                        </div>
                    ))
            }       
        </div>
        );
    }
}

const styles =theme=>({
    root:{
        flexGrow: 1,
       
    },  
  });

List.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(List);
