import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'; 
import {Button} from '@material-ui/core'
import {Animated} from 'react-animated-css' 
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.enableMessage = this.enableMessage.bind(this);

    this.state = {
      displayMessage: false,
      vis:false
    };

    this.timer = setTimeout(this.enableMessage, 250);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  enableMessage=()=> {
    this.setState({displayMessage: true});
  }
_setState=()=>{
  this.setState({vis:true})

}
  render() {
    const {displayMessage} = this.state;

    if (!displayMessage) {
      return null;
    }

    return (
      <div>
     <Animated animationIn="zoomOut" animationOut="fadeOut" isVisible={false}>
        <div>
            hello world ;)
        </div>
        </Animated>
                {/* <Button  onClick={this._setState}
        style={{borderRadius:35 ,height:50  
          ,background:'rgba(0, 0, 0, 0) -webkit-linear-gradient(left, rgb(148, 115, 221) 0%, rgb(26, 201, 228) 100%) repeat scroll 0% 0%' }} >
           Click</Button> */}
      </div>
    
    );
  }
}

export default Loader;