import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {Button}from '@material-ui/core'
import backImage from '../imgs/back.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import SecondNav from '../components/SecondNav'
 class Background_Page extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       buttonColor:'#01bacf',
       exploreColor:'white',
       scrollEvent:false,
       textHide:true,
      
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
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop >60) {
          this.setState({scrollEvent:true })
          this.setState({textHide:false })

      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop<60) {
          this.setState({scrollEvent:false})
          this.setState({textHide:true })

      }
    });
    
  }
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
         {
          this.state.scrollEvent && <SecondNav/>
        }
          <div className={classes.header} >
            <div className={classes.content} >
           { this.state.textHide && <div className={classes.grow}>
               <text className={classes.textStyle} >Home</text>  
                 <text className={classes.textStyle} >Blog</text>  
                <text className={classes.textStyle} >Contact</text>  
              </div>}
              <div style={{display:'flex' , justifyContent:'center' ,paddingTop:60,}} >
              <text style={{fontSize:'50px',
                 color:'white' , fontWeight:700 }}>Mr.Toi</text>
              </div>
            <div className={classes.contentBreak}>
              <text style={{color:'#D4EAF9', fontSize:'20px',
              fontFamily:'Droid Serif' ,fontStyle:'italic',display:'flex',width:'60%',paddingTop:40 }} >
                IoT is the best opportunity for career oriented creators as they 
                can learn,develop, build and understand system along with their own ideas and techniques
                </text>
            </div>
             <div className={classes.readbuttonBreak} >
              <Button size='large' onMouseEnter={this.handleButtonColor} 
                onMouseLeave={this.handleButtonColor}
                style={{backgroundColor:this.state.buttonColor ,boxShadow:'#00a8bd',width:140 ,height:60 }} >Read More</Button>
            </div>
            </div>
            {/* <div style={{position:'absolute',bottom:20,right:0,left:0}} > */}
            <div className={classes.exploreBreak} >
              <a onMouseEnter={this.handleExplore} onMouseLeave={this.handleExplore} style={{cursor:'pointer',color:this.state.exploreColor}}>
              <text style={{fontSize:18}} >Explore</text>
              <br></br><ExpandMoreIcon style={{color:this.state.exploreColor,fontSize:30}} ></ExpandMoreIcon></a>
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
      backgroundSize: 'cover',

    },
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      paddingTop:60,
      [theme.breakpoints.down('xs')]:{
        paddingTop:0,
      },
      justifyContent:'center',
      alignItems: 'center',
        },
    textStyle:{
      color:'white',
      fontSize:'20px',
      fontWeight:500,
      paddingRight:30,
      cursor:'pointer',
    },
    contentBreak:{
      display:'flex' , 
      justifyContent:'center',
    },
    readbuttonBreak:{
      display:'flex' , 
      justifyContent:'center',
      paddingTop:90,
      [theme.breakpoints.down('md')]:{
        paddingTop:10,
      },
    },
    exploreBreak:{
      // display:'flex' , 
      // justifyContent:'center',
      // padding:'50px'
      position:'absolute',
      bottom:20,
      [theme.breakpoints.down('xs')]:{
        bottom:-10,
      },
      right:0,
      left:0,
    },
    grow:{
      textAlign:'right'
    }
  });

  Background_Page.propsTypes={
    classes:PropTypes.object.isRequired,
  }
// export default App
export default  withStyles(styles)(Background_Page);