import React, {Component} from 'react'
import NavbarContainer from '../containers/NavbarContainer'
//needed for onTouchTap
//http://www.material-ui.com/#/get-started/installation
//import injectTapEventPlugin from 'react-tap-event-plugin'

//equivalent to nav bar
import PrimaryNavBar from '../components/PrimaryNavBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'

//need to be wrapped in other divs for custom rendering with material
export default function App ({ children }) {
  return (
    <MuiThemeProvider>
      <div>
        <NavbarContainer component={NavbarContainer} />
        <div id='dynamic-view'>
          { children }
        </div>
      </div>
    </MuiThemeProvider>
  )
}
