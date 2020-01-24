import React from 'react';
import {AppBar , Toolbar , Typography} from '@material-ui/core'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
class BlogHead extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <div>
        <div style={{backgroundColor:'black' ,width:"100%" , height:200 , paddingTop:60}} >
              <Grid>
                <Typography variant='h4' style={{color:'white',padding:25}}>Blog & News</Typography>
                <Typography style={{color:'white'}} >Mr.Toi --> Blog</Typography>
              </Grid>
        </div>
        </div>
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
BlogHead.propTypes={
  classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(BlogHead);

  // <div className={classes.rootToolbar} >
    //   <div className={classes.root}>
        // {/* <AppBar position="static" className={classes.appBar}  >
        //   <Toolbar style={{justifyContent:'center'}} >
        //     <div>
        //       <Grid>
        //         <Typography variant='h4' style={{color:'black',padding:25}}>Blog & News</Typography>
        //         <Typography style={{color:'black'}} >Mr.Toi --> Blog</Typography>
        //       </Grid>
        //     </div>
        //   </Toolbar>
        // </AppBar> */}