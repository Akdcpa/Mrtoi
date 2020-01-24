import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import keerthi from '../imgs/keerthi.jpg';
import muthu from '../imgs/muthu.jpg';
import abiraman from '../imgs/abiraman.jpg';
import aravind from '../imgs/aravind.jpg';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Card from '@material-ui/core/Card'
const gridSize = "column";
class BlogList extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       personData:[
         {
           img:keerthi,
           name:"M.KEERTHIVASAN",
           job:"FOUNDER ,CEO"
         },
         {
          img:muthu,           
          name:"MUTHUKUMAR",
          job:"MENTOR"
         },
         {
           img:abiraman,
           name:"K.ABIRAMAN",
           job:"CHIEF TECHNICAL OFFICER"
         },
         {
           img:aravind,
           name:"ARAVIND",
           job:"DIRECTING MANAGER"
         }
       ] , 
       gridAlign:(window.innerWidth <= 600 || window.innerHeight<=600 ? 'column' : 'row')
    }
  }

    render(){
  const {classes} = this.props;
        return (
        <div style={{display:'flex' , justifyContent:'center'  }} >  
        <Paper  className={classes.rootPaper} >
        <div className={classes.root} >
          <div>
          { this.state.personData.map((data , index)=>( 
            <Paper variant="outlined" className={classes.paper}>
            <Grid direction={this.state.gridAlign} className={classes.rootGrid} container wrap="wrap-reverse" spacing={3}>
                <Grid item md justify='center' >
                  <img className={classes.imageStyle} src={data.img} />
                  <div>
                      <FacebookIcon style={{cursor:'pointer'}} />
                      <InstagramIcon style={{cursor:'pointer'}} />
                      <TwitterIcon style={{cursor:'pointer'}} />
                      <LinkedInIcon style={{cursor:'pointer'}}  />
                    </div>
                </Grid>
                <Grid item md>
                <Typography variant='h5' className={classes.nameContent} >{data.name}</Typography>
                <Typography className={classes.jobContent}  >{data.job}</Typography>
                </Grid>
            </Grid>
            </Paper>
               )) }
            </div>
          </div>
          </Paper>
          </div>
          );
    }
  
}
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 900,
    height:200,
    [theme.breakpoints.down('md')]:{
      height:320
    },
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    justifyContent:'center',
    backgroundColor:'white',
    paddingTop:40,
    [theme.breakpoints.down('xs')]:{
      gridSize:'row'
    }
  },
  rootGrid:{
    // width:1200
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  imageStyle:{
    width:150,
    height:150,
    borderRadius: 150/2
  },
  nameContent:{
    textAlign:'left',
    [theme.breakpoints.down('md')]:{
      textAlign:'center',
    },
    paddingTop:30,
    fontFamily:'Droid Serif ',
    fontStyle:'italic',
    fontWeight:'bold',
  },
  jobContent:{
    textAlign:'left',
    [theme.breakpoints.down('md')]:{
      textAlign:'center',
      fontFamily:'Droid Serif ',
      fontStyle:'italic',

    },
    paddingTop:30,
    fontWeight:5,
  },
  appBar:{
    backgroundColor:'white',
    justifyContent:'center'
  },
  card:{
    maxWidth:900,
    alignContent: 'center',
    justifyContent:'center'
  },
  rootPaper:{
    width:'75%' ,
    backgroundColor:'white' ,
     marginTop:'-60px',
     [theme.breakpoints.down("sm")]:{
       marginTop:0
     }
  }
})


BlogList.propTypes={
    classes:PropTypes.object.isRequired,
}

export default withStyles(useStyles)(BlogList);