import React, {Component} from 'react'

//needed for onTouchTap
//http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin'

//equivalent to nav bar
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'

// import Footer from './Footer'


//need to be wrapped in other divs for custom rendering with material
export default function App ({ children }) {
  return (
    <MuiThemeProvider>
      <div>
        <AppBar />
        <div id='dynamic-view'>
          { children }
        </div>
        {/*<Footer />*/}
      </div>
    </MuiThemeProvider>
  )
}
