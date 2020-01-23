import React from 'react';
import BlogList from '../components/BlogList'
import AppHead from '../components/AppHead'
export default class App extends React.Component{
  render(){
    return(
      <div className={styles.root}>
        <AppHead/>
        <BlogList/>
      </div>
    );
  }
}
const styles ={
    root:{
        flexGrow: 1,
        // display:'flex',
    },
  };
// export default App
