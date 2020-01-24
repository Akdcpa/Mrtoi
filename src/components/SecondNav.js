import React from 'react';
import {AppBar , Toolbar , Typography} from '@material-ui/core'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
class SecondNav extends React.Component{
  render(){
    const {classes} = this.props;
    return(
          <AppBar position="sticky" className={classes.appBar}  >
          <Toolbar>
            <div className={classes.grow} />
            <text className={classes.textStyle} >Home</text>  
                 <text className={classes.textStyle} >Blog</text>  
                <text className={classes.textStyle} >Contact</text>  
          </Toolbar>
        </AppBar>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
    grow:{
      flexGrow:1
    },
    appBar:{
      backgroundColor:'white',
      height:100,
      [theme.breakpoints.down('xs')]:{
        height:70,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    }, 
     textStyle:{
      color:'black',
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
SecondNav.propTypes={
  classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(SecondNav);