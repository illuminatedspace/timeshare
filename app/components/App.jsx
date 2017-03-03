import React, {Component} from 'react'

// import NavbarContainer from '../containers/NavbarContainer'

// import Footer from './Footer'


//unstyled jsx - to be materialized!
//the navbarContainer and footer may need to be wrapped in other divs, depends on how material works
export default function App ({ children }) {
  return (
    <div>
      {/*<NavbarContainer />*/}
      <div>
        { children }
      </div>
      {/*<Footer />*/}
    </div>
  )
}
