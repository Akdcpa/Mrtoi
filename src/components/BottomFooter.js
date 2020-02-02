import React from 'react';
import {AppBar , Toolbar , Typography} from '@material-ui/core'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
class BottomFooter extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root} >
        <div style={{backgroundColor:'black' ,width:"100%" , height:200 ,display:'flex' ,
        alignItems:'center' , justifyContent:'flex-end'}} >
                <Typography style={{color:'white' , marginRight:30}} >Mr.Toi</Typography>
        </div>
        </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
        paddingTop:10,
    },
    grow:{
      flexGrow:1
    },
    rootToolbar:theme.mixins.toolbar,

    appBar:{
      backgroundColor:'white',
      height:150,
      [theme.breakpoints.down('xs')]:{
        height:140,
      },
      // justifyContent:'center',
      // alignItems:'center'
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    }, 
     textStyle:{
      color:'Black',
      fontSize:'20px',
      fontWeight:500,
      paddingRight:30,
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      cursor:'pointer',
    },

});
BottomFooter.propTypes={
  classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(BottomFooter);