import React, {Component} from 'react'
import NavBarContainer from '../containers/NavBarContainer'
//needed for onTouchTap
//http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin'

//equivalent to nav bar
import PrimaryNavBar from '../components/PrimaryNavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'

// import Footer from './Footer'


//need to be wrapped in other divs for custom rendering with material
export default function App ({ children }) {
  return (
    <MuiThemeProvider>
      <div>
        <NavBarContainer component={NavBarContainer} />
        <div id='dynamic-view'>
          { children }
        </div>
        {/*<Footer />*/}
      </div>
    </MuiThemeProvider>
  )
}
