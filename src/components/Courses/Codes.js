import React from 'react'
import PropTypes from 'prop-types';
import {Grid  , withStyles , Typography , Paper , Card} from '@material-ui/core'

class Codes extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }
    
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.root} >
                <Grid alignItems="center" container>
                    <Card classsName={classes.cardStyle} >
                        {
                            this.props.code.map((value,index)=>(
                            <div style={{textAlign:'justify' , desplay:'flex' ,
                             flexDirection:"row"}} >
                                  <Grid direction="row" spacing={2}  container >  
                                    <Grid  item ><Typography style={{float:"right",}}  >{index+1} .</Typography> </Grid>
                                   <Grid item ><Typography>{value}</Typography></Grid>
                                </Grid>  
                            </div>
                            ))
                        }
                    </Card>
                </Grid>
            </div>
        );
    }
}

const styles=theme=>({
        root:{
            flexGrow:1,
            display:'flex',
            justifyContent:'center',
            marginLeft:30,
            marginTop:20,
            // alignItems:'flex-start',
        },
        cardStyle:{
            display:'flex',
            Width:"90%",
        }
    });
Codes.propTypes={
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Codes)