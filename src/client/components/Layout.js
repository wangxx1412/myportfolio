import React from 'react'
import Hero from './Hero.js'
import Resume from './Resume.js'
import Divider from './Divider.js'
import AddInfo from './AddInfo.js'
import Footer from './Footer.js'

class Layout extends React.Component {
  render(){
    return(
      <div>
        <Hero />
        <Divider />
        <Resume />
        <Divider />
        <AddInfo />
        <Footer />
      </div>
    );
  }
}

export default Layout
