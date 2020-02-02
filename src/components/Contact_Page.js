import React, { Component } from 'react'
import {withStyles , Typography , Grid ,Paper, Button , OutlinedInput} from '@material-ui/core'
import PropTypes from 'prop-types';
import Letter from '../imgs/letter.svg'
import Footer from '../components/BottomFooter'
 class Contact_Page extends React.Component {
  render() {
      const {classes} = this.props;
    return (
      <div className={classes.root}>
          <Typography variant='h3' className={classes.text} >Have Some Questions?  </Typography>
    <Grid container justify="space-evenly"  className={classes.rootGrid} >
    <Grid item  >
                <div className={classes.alignLetter} >
                    <img className={classes.letterStyle} src={Letter} ></img>
                </div>        
      </Grid>
      <Paper elevation={3} className={classes.paper} >
      <Grid className={classes.secondGrid} justify='space-between' item direction='column'  >
          <div  className={classes.textField}  >
           <OutlinedInput className={classes.fieldWidth} style={{borderRadius:35 ,notchedOutline:30}} placeholder="Firstname" ></OutlinedInput>
           </div>
           <div  className={classes.textField}  >
           <OutlinedInput className={classes.fieldWidth} style={{borderRadius:35 }} placeholder="Lastname" ></OutlinedInput>
           </div>
           <div  className={classes.textField}  >
           <OutlinedInput className={classes.fieldWidth} style={{borderRadius:35  }} placeholder="Email"></OutlinedInput>
           </div>
           <div  className={classes.textField}  >
           <OutlinedInput className={classes.fieldWidth} multiline style={{borderRadius:20 ,height:100 }} placeholder="Your Question..." ></OutlinedInput>
           </div>
           <div  className={classes.textField}  >
           <Button className={classes.fieldWidth} style={{borderRadius:35 ,height:50  ,background:'rgba(0, 0, 0, 0) -webkit-linear-gradient(left, rgb(148, 115, 221) 0%, rgb(26, 201, 228) 100%) repeat scroll 0% 0%' }} >Send Message</Button>
           </div>
      </Grid>
      </Paper>
    </Grid>
              
      </div>
    )
  }
}

const styles=theme=>({
    root:{
       flexGrow:1
    },
    rootGrid:{
        flexGrow:1,
        padding: theme.spacing(0, 3),
        marginTop:20,
        marginBottom:90
    },
    text:{
        fontWeight:'bold',
        fontFamily:'Droid Serif',
        fontSize:40

    },
    letterStyle:{
        width:340,
        height:340,
        [theme.breakpoints.down("xs")]:{
            width:300,
            height:300,
        }
    },
    alignLetter:{
            marginTop:40,
            [theme.breakpoints.down("xs")]:{
                marginTop:10,
            }
    },
    textField:{
        marginBottom:10,

        // width:,
    },
    secondGrid:{
        display:'flex',
        justifyContent:"center",
        margin:40   ,
        [theme.breakpoints.down("xs")]:{
            margin:30
        }
    },
    paper:{
        backgroundColor:"rgba(0,0,0,0.06)",
        borderRadius:20
    },
    fieldWidth:{
        width:350,
        [theme.breakpoints.down("xs")]:{
            width:300
        }
    }

})

Contact_Page.propTypes={
    classes:PropTypes.object.isRequired,
}
export default withStyles(styles)(Contact_Page);