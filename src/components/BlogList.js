import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent';
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
const useStyles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 700,
    height:200,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    justifyContent:'center'
  },
  card: {
    display: 'flex',
    width:400,
    // alignItems: 'center',
    justifyContent:'center'
  },
  rootPaper:{
    backgroundColor:'rgba(0,0,0,0.6)',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
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
    height:150
  }

})


class BlogList extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       personData:[
         {
           img:keerthi,
           job:"CEO"
         },
         {
           img:muthu,
           job:"MENTOR"
         },
         {
           img:abiraman,
           job:"CHIEF TECHNICAL OFFICER"
         },
         {
           img:aravind,
           job:"DIRECTING MANAGER"
         }
       ]
    }
  }
  
    render(){
  const {classes} = this.props;
  const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;
        return (
          // <Paper elevation={3} className={classes.rootPaper} >
        <div className={classes.root} >
          
          { this.state.personData.map((data , index)=>(
            <Paper className={classes.paper}>
            <Grid className={classes.rootGrid} container wrap="wrap-reverse" spacing={3}>
                <Grid item>
                  <img className={classes.imageStyle} src={data.img} />
                </Grid>
                <Grid item xs>
                    <Typography>{data.job}</Typography>
                    <div style={{right:0 , bottom:0}} ><FacebookIcon/>
                    </div>
                </Grid>
            </Grid>
            </Paper>
               )) }
            </div>
            
          // </Paper>
          );
    }
  
}

BlogList.propTypes={
    classes:PropTypes.object.isRequired,
}

export default withStyles(useStyles)(BlogList);