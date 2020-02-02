import React from 'react';
import {AppBar , Toolbar , Typography} from '@material-ui/core'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton';
import SpanIcon from './SpanIcon'
import DisplayDrawer from './DisplayDrawer'
class HomeNav extends React.Component{
constructor(props) {
  super(props)

  this.state = {
    top: false,
    left: false,
    bottom: false,
    right: false, 
    drawerStatus:false,
  }
}

  render(){
    const {classes} = this.props;
    return(
          <AppBar position="sticky"  style={{backgroundColor:this.props.backColor}} className={classes.appBar}  >
          <Toolbar>
            {/* <div style={{ marginRight:20}} > */}
              <DisplayDrawer iconcolor={this.props.iconcolor} textColor={this.props.textColor} ></DisplayDrawer>
            {/* </div> */}
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
      // backgroundColor:,
      height:100,
      [theme.breakpoints.down('xs')]:{
        height:70,
      },
    },
      display:{
        display:'flex',
        [theme.breakpoints.down("xs")]:{
          display:'none'
        }
    },
    displayDrawer:{
      display:'none',
      [theme.breakpoints.down("xs")]:{
        display:'flex'
      }
  },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    }, 
     textStyle:{
      // color:'white',
      fontSize:'20px',
      fontWeight:500,
      paddingRight:30,
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    divSytle:{
      backgroundColor:'white',
      dispaly:'none',
      [theme.breakpoints.down('xs')]:{
        display:'flex'
      },
    },
    drawerMediaHide:{
      display:'none',
      // [theme.breakpoints.down('xs')]: {
      //   display: 'block',
      // },
    },

});
HomeNav.propTypes={
  classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(HomeNav);