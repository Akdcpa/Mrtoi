import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {Button}from '@material-ui/core'
import backImage from '../imgs/back.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

 class Background_Page extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       buttonColor:'#01bacf',
       exploreColor:'white',
      
    }
  }
  handleButtonColor=(event)=>{
    if(event.type==='mouseenter'){
      this.setState({buttonColor:'white'})
    }
    else{
      this.setState({buttonColor:'#01bacf'})
    }
  }
  handleExplore=(event)=>{
    if(event.type==='mouseenter'){
      this.setState({exploreColor:'#6BA6FC'})

    }
    else{
      this.setState({exploreColor:'white'})
    }
  }
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
          <div className={classes.header} >
            <div className={classes.content} >
              <text style={{fontSize:'50px',
                 color:'white' , fontWeight:700 , fontFamily:'roboto',
                 textAlign:'center'}}>Mr.Toi</text>
                 <br></br>
              <text style={{color:'#D4EAF9' ,display:'inline-block', fontSize:'20px',textShadow:'10px',
              fontFamily:'Droid Serif' ,fontStyle:'italic',padding:'25px' ,textAlign:'center' , boxSizing:'border-box',width:'60%' }} >
                IoT is the best opportunity for career oriented creators as they 
                can learn,develop, build and understand system along with their own ideas and techniques
                </text>
                <br></br>
                <Button onMouseEnter={this.handleButtonColor} 
                onMouseLeave={this.handleButtonColor}
                style={{backgroundColor:this.state.buttonColor ,justifyContent:'bottom',boxShadow:'#00a8bd', 
              verticalAlign:'middle'}} >Read More</Button>
              <div style={{position:'absolute',bottom:20,right:0,left:0}} >
              {/* <text style={{color:'white'}} >explore</text> */}
              <a onMouseEnter={this.handleExplore} onMouseLeave={this.handleExplore} style={{cursor:'pointer',color:this.state.exploreColor}}>
              <text style={{fontSize:18}} >Explore</text>
              <br></br><ExpandMoreIcon style={{color:this.state.exploreColor,fontSize:30}} ></ExpandMoreIcon></a>
              </div>
            </div>
            
          </div>
      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
    },
    header: {
      backgroundImage: `url(${backImage})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      paddingTop:20,
    },
    textStyle:{
      color:'white',
      fontSize:'20px',
      fontWeight:500,
      paddingRight:30,
      cursor:'pointer',
    }
  
  });

  Background_Page.propsTypes={
    classes:PropTypes.object.isRequired,
  }
// export default App
export default  withStyles(styles)(Background_Page);