import React from 'react';
import {AppBar , Toolbar , Typography} from '@material-ui/core'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
class SpanIcon extends React.Component{
  render(){
    const {classes} = this.props;
    return(
        // <div style={{display:'flex', justifyContent:'flex-end'}} >
      <div  style={{width:23 , height:20,backgroundColor:this.props.backColor,} }>
          <span style={{backgroundColor:this.props.color}} className={classes.hr} ></span>
          <span style={{backgroundColor:this.props.color}} className={classes.hr} ></span>
          <span style={{backgroundColor:this.props.color}} className={classes.hr}></span>
      </div>
    //   </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
    spanStyle:{
        width:'22px',
        height:'2px',
        borderRadius: '2px',
        backgroundColor:"#888",
        display: 'block',        

    },
    hr:{
    height: '3px',
    border: 0,
    boxShadow: 'inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)',
    width:'22px',
    marginBottom:4,
    borderRadius: '2px',
    backgroundColor:"#888",
    display: 'block',        
    },
    borderBox:{

    }
});
SpanIcon.propTypes={
  classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(SpanIcon);