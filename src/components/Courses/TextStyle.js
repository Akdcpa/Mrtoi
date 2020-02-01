import React from 'react';
import {Typography , withStyles , Grid , Card,CardMedia , CardContent} from '@material-ui/core'
import PropTypes from 'prop-types'
class TextStyle extends React.Component{
    render(){
        const {classes} = this.props;
        return(
                <div style={{textAlign:'justify',marginTop:10}} > 
                    <Typography style={{fontFamily:'',fontWeight:'bold',marginTop:10}} >{this.props.title}</Typography>
                    <Typography style={{fontFamily:'Droid Serif',textAlign:'justify',marginLeft:30,fontWeight:'lighter',marginTop:10}} >
                        {this.props.description}
                    </Typography>
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
        marginLeft:60,
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

TextStyle.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(TextStyle);
