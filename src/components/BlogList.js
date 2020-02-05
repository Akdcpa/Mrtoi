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
           job:"FOUNDER ,CEO",
           fb_id:"https://www.facebook.com/keerthivasan1431999/" ,
           insta_id:"https://www.instagram.com/k3vasan_official/",
           linkedin_id:"https://www.linkedin.com/in/keerthivasan-manivannan-5a3193199/",
           twitter_id:"https://twitter.com/K3vasanO/",
         },
         {
          img:muthu,           
          name:"MUTHUKUMAR",
          job:"MENTOR",
          fb_id:"#",
          insta_id:"#",
          linkedin_id:"#",
          twitter_id:"#",
         },
         {
           img:abiraman,
           name:"K.ABIRAMAN",
           job:"CHIEF TECHNICAL OFFICER",
           fb_id:"https://www.facebook.com/abi.raman.528/",
           insta_id:"https://www.instagram.com/abiraman_ak/",
           linkedin_id:"https://www.linkedin.com/in/abiraman-k-3b20bb151/",
           twitter_id:"https://twitter.com/AbiramanK1/",
         },
         {
           img:aravind,
           name:"ARAVIND",
           job:"DIRECTING MANAGER",
           fb_id:"https://www.facebook.com/aravind.balaji.334/",
           insta_id:"https://twitter.com/AravindBalaji21/",
           linkedin_id:"https://www.instagram.com/aravind.balaji.2000/",
           twitter_id:"https://www.linkedin.com/in/aravind-balaji-4ab137141/",
         }
       ] , 
       gridAlign:(window.innerWidth <= 600 || window.innerHeight<=600 ? 'column' : 'row')
    }
  }

    render(){
  const {classes} = this.props;
        return (
        <div style={{display:'flex' , justifyContent:'center'  }} >  
        <Paper elevation={6} className={classes.rootPaper} >
        <div className={classes.root} >
          <div style={{paddingTop:100}} >
          { this.state.personData.map((data , index)=>(   
            <div style={{paddingBottom:30}} >
            <Paper elevation={6}   className={classes.paper}>
            <Grid  className={classes.rootGrid} container wrap="wrap-reverse" spacing={3}>
                <Grid  item   >
                  <div style={{textAlign:'left' , marginLeft:40 }} >
                  <img  className={classes.imageStyle} src={data.img} /></div>
                </Grid>
                <Grid item >
                <Typography variant='h6' className={classes.nameContent} >{data.name}</Typography>
                <Typography className={classes.jobContent}  >{data.job}</Typography>
                <Typography className={classes.mediaContent} >
                  <a href={data.fb_id} target="_blank" rel="noopener noreferrer" ><FacebookIcon style={{cursor:'pointer' , marginRight:15 , color:'#3b5998'}} /></a>  
                  <a href={data.insta_id} target="_blank"  rel="noopener noreferrer"  >     <InstagramIcon style={{cursor:'pointer',marginRight:15 , color:'#e4405f'}} /></a>  
                  <a href={data.twitter_id} target="_blank" rel="noopener noreferrer"  >    <TwitterIcon style={{cursor:'pointer',marginRight:15, color:'#00acee'}} /></a>  
                  <a href={data.linkedin_id} target="_blank" rel="noopener noreferrer"  >  <LinkedInIcon style={{cursor:'pointer',marginRight:15, color:'#0e76a8'}}  /></a>  
                </Typography>
                </Grid>
            </Grid>
            </Paper>
            </div>
        
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
    paddingBottom: 50,
  },
  paper: {
    maxWidth: 900,
    height:200,
    [theme.breakpoints.down('md')]:{
      height:370,
    },
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(3),
    justifyContent:'center',
    backgroundColor:'white',
    paddingTop:40,
    [theme.breakpoints.down('xs')]:{
      gridSize:'row'
    },
    borderRadius:0,
    paddingBottom:20
  },
  rootGrid:{
    flexDirection:'row',
    [theme.breakpoints.down('sm')]:{
      flexDirection:'column'
    }
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
      // maxWidth:60
    },
    paddingTop:30,
    marginRight:20,
    fontFamily:'Droid Serif ',
    fontStyle:'italic',
    fontWeight:'bold',
  },
  jobContent:{
    textAlign:'left',
    marginRight:30,
    [theme.breakpoints.down('md')]:{
      textAlign:'center',
      fontFamily:'Droid Serif ',
      fontStyle:'italic',

    },
    mediaAlign:{
      // display:'none',
      textAlign:'left',
 
    },
    paddingTop:30,
    fontWeight:5,
  },
  mediaContent:{
    textAlign:'left',
    marginTop:10,
    [theme.breakpoints.down('md')]:{
      textAlign:'center',
      
    },
  },
  appBar:
  {
    backgroundColor:'white',
    justifyContent:'center'
  },
  card:{
    maxWidth:900,
    alignContent: 'center',
    justifyContent:'center'
  },
  rootPaper:{
    width:'85%' ,
    backgroundColor:'white' ,
     marginTop:'-60px',
     [theme.breakpoints.down("sm")]:{
       marginTop:0
     },
     borderRadius:0
  }
})


BlogList.propTypes={
    classes:PropTypes.object.isRequired,
}

export default withStyles(useStyles)(BlogList);