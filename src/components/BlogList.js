import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import keerthi from '../imgs/logo.png';
import muthu from '../imgs/logo.png';
import abiraman from '../imgs/logo.png';
import aravind from '../imgs/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook'; 
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
  const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

        return (
          // <Paper elevation={3} className={classes.rootPaper} >
        <div className={classes.root} >
          <div>
          { this.state.personData.map((data , index)=>(
            <Paper className={classes.paper}>
            <Grid direction={this.state.gridAlign} className={classes.rootGrid} container wrap="wrap-reverse" spacing={3}>
                <Grid item xs justify='center' >
                  <img className={classes.imageStyle} src={data.img} />
                  <div>
                      <FacebookIcon style={{cursor:'pointer'}} />
                      <InstagramIcon style={{cursor:'pointer'}} />
                      <TwitterIcon style={{cursor:'pointer'}} />
                      <LinkedInIcon style={{cursor:'pointer'}}  />
                    </div>
                </Grid>
                <Grid item xs>
                <Typography variant='h5' className={classes.nameContent} >{data.name}</Typography>
                <Typography className={classes.jobContent}  >{data.job}</Typography>
                </Grid>
            </Grid>
            </Paper>
               )) }
            </div>
          </div>
          // </Paper>
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
    [theme.breakpoints.down('xs')]:{
      height:320
    },
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.2)',
    paddingTop:40
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
    [theme.breakpoints.down('xs')]:{
      textAlign:'center',
    },
    paddingTop:30,
    fontFamily:'Droid Serif ',
    fontStyle:'italic',
    fontWeight:'bold',
  },
  jobContent:{
    textAlign:'left',
    [theme.breakpoints.down('xs')]:{
      textAlign:'center',
    },
    paddingTop:30,
    fontWeight:5,
  },
  appBar:{
    backgroundColor:'white',
    justifyContent:'center'
  },

})


BlogList.propTypes={
    classes:PropTypes.object.isRequired,
}

export default withStyles(useStyles)(BlogList);