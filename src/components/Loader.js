import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'; 
import {Button} from '@material-ui/core'
import {Animated} from 'react-animated-css' 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import image from '../imgs/letter.svg'
import HomeNav from './HomeNav'
import './animation.css'
class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.enableMessage = this.enableMessage.bind(this);

    this.state = {
      displayMessage: false,
      items: ['hello', 'world', 'click', 'me'],
      vis:false,
    };    
    this.handleAdd = this.handleAdd.bind(this);
    this.timer = setTimeout(this.enableMessage, 250);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop >0) {
        this.state.vis=true;
      }
    });
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY ;
      if (isTop<30) {
        this.state.vis=false;
          // this.setState({textHide:true })
      }
    });
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

handleAdd() {
  // const newItems = this.state.items.concat([
  //   prompt('Enter some text')
  // ]);
  // this.setState({items: newItems});

  this.setState({vis:true})
}

handleRemove(i) {
  let newItems = this.state.items.slice();
  newItems.splice(i, 1);
  this.setState({items: newItems});
}


  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
                   <HomeNav ></HomeNav>

      </div>
    ));


  
    return (
      <div>
        {/* <button onClick={this.handleAdd}>Add Item</button> */}
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {this.state.vis && <HomeNav textColor="black"
                  iconcolor="#a2a2a2"
                  backColor="white" ></HomeNav>}
            
        </ReactCSSTransitionGroup>
      </div>
    
    );
  }
}

export default Loader;