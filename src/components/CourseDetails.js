import React from 'react'
import PropTypes from 'prop-types';
import {Grid  , withStyles , Typography , Paper} from '@material-ui/core'

class CourseDetails extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }
    
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root} >
                <div className={classes.childDiv} >
                <Grid className={classes.rootGrid} alignItems="center"   container>
                    <Grid justify="center" alignItems="center" item xs >
                        <div className={classes.descStyle} >
                        <Typography variant="h4"className={classes.titleStyle} >{this.props.headLine}</Typography>
                        <div style={{textAlign:'justify',margin:30,}} ><Typography style={{color:'white',lineHeight:1.6}} 
                           variant="inherit"  >
                               {this.props.description}</Typography> </div>   
                        </div>
                    </Grid>
                    <Grid  justify="center" alignItems="flex-end" item xs>
                        <div>
                        <img className={classes.imgStyle} src={this.props.image} ></img> 
                        </div>
                    </Grid>
                </Grid>
                </div>
            </div>
        );
    }
}

const styles=theme=>({
        root:{
            flexGrow:1,
            display:'flex',
            justifyContent:'center',
            // alignItems:'flex-start',
        },
        childDiv:{
            // height:"100%",
            width:"95%",
            marginTop:15,
            backgroundColor:'#333',
        },
        rootGrid:{ 
            
            flexDirection: 'row',
            // width:1300,
            marginBottom:50,
            marginTop:50,
            [theme.breakpoints.down('xs')]:{
                flexDirection: 'column',
                marginBottom:0,
                marginTop:0,
                margin:0,
                padding:0
            },
            // [theme.breakpoints.down('md')]:{
            //     margin:0
            // },
        },

        imgStyle:{
            minWidth:50,
            minHeight:50,
            maxHeight:500,
            maxWidth:500,
            // margin:30,
            [theme.breakpoints.down('sm')]:{
                minWidth:200,
                maxWidth:300,
                marginTop:30,
            }
        },
        desGrid:{
            backgroundColor:'rgba(0,0,0,0.6)',
            width:'100%',
            height:'100%'
        },
        imgGrid:{
            backgroundColor:'rgba(0,0,0,19)',
        },
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.text.secondary,
          },
        titleStyle:{
            fontWeight: 'bold',
            color:'white'
        },
        descStyle:{
            // minWidth:60,
            // display:'flex',
            // justifyContent:'center',
            // alignItems:'center',
            maxWidth:500,
            textAlign:"center"

        }
    });
CourseDetails.propTypes={
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(CourseDetails)