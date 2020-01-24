import React from 'react';
import BlogList from '../components/BlogList'
import AppHead from '../components/AppHead'
import ParticlesBg from 'particles-bg'
import BlogHead from '../components/BlogHead'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core'
class Blog extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={styles.root}>
        <AppHead/>    
        <BlogHead/> 
        <BlogList/>

      </div>
    );
  }
}
const styles =theme=>({
    root:{
        flexGrow: 1,
        // display:'flex',
    },
  });

Blog.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(Blog);
