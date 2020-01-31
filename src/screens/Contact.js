import React from 'react';
import BlogList from '../components/BlogList'
import AppHead from '../components/AppHead'
import ParticlesBg from 'particles-bg'
import BlogHead from '../components/BlogHead'
import BottomFooter from '../components/BottomFooter'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core'
import HomeNav from '../components/HomeNav'
import Contact_Page from '../components/Contact_Page'
import Mediapage from '../components/MediaPage'
class Contact extends React.Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={styles.root}>
        <AppHead/>   
         <HomeNav backColor='white' textColor="black" />
         <Contact_Page/>
         <Mediapage/>
         <BottomFooter/>
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

Contact.propTypes={
  classe:PropTypes.object.isRequired,
}

export default withStyles(styles)(Contact);
