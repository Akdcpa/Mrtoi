import React, { Component } from 'react'
import {withStyles , Typography , Grid , Button , OutlinedInput} from '@material-ui/core'
import PropTypes from 'prop-types';
import Letter from '../imgs/letter.svg'
import Footer from '../components/BottomFooter'
 class Contact_Page extends React.Component {
  render() {
      const {classes} = this.props;
    return (
      <div className={classes.root}>
          <Typography variant='h3' className={classes.text} >Have Some Questions?  </Typography>
    <Grid container className={classes.root} spacing={2}>
      <Grid item md>
                <div className={classes.alignLetter} >
                    <img className={classes.letterStyle} src={Letter} ></img>
                </div>        
      </Grid>
      <Grid className={classes.secondGrid} alignContent='space-between' item direction='column' md >
          <div  className={classes.textField}  >
           <OutlinedInput style={{borderRadius:35 , width:350 , notchedOutline:30}} placeholder="Firstname" ></OutlinedInput>
           </div>
           <div  className={classes.textField}  >
           <OutlinedInput style={{borderRadius:35 , width:350}} placeholder="Lastname" ></OutlinedInput>
           </div>
           <div  className={classes.textField}  >
           <OutlinedInput style={{borderRadius:35  , width:350}} placeholder="Email"></OutlinedInput>
           </div>
           <div  className={classes.textField}  >
           <OutlinedInput multiline style={{borderRadius:20 , width:350,height:100 }} placeholder="Your Question..." ></OutlinedInput>
           </div>
           <div  className={classes.textField}  >
           <Button  style={{borderRadius:35 , width:350,height:50  ,background:'rgba(0, 0, 0, 0) -webkit-linear-gradient(left, rgb(148, 115, 221) 0%, rgb(26, 201, 228) 100%) repeat scroll 0% 0%' }} >Send Message</Button>
           </div>
      </Grid>
    </Grid>
              
      </div>
    )
  }
}

const styles=theme=>({
    root:{
        flexGrow:1,
        padding: theme.spacing(0, 3),
    },
    text:{
        fontWeight:'160px',
    },
    letterStyle:{
        width:340,
        height:340
    },
    alignLetter:{
        display: 'flex',
        justifyContent:'center',
        paddingTop:20

    },
    textField:{
        padding:10
        // width:,
    },
    secondGrid:{
        display:'flex',
        justifyContent:"center"
    }
  

})

Contact_Page.propTypes={
    classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(Contact_Page);