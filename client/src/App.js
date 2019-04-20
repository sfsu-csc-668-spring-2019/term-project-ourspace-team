import React, { Component } from 'react';
import logo from './logo.svg';
import Routes from './routes'
import './App.css';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      //light: '#757ce8',
      main: '#4490e6',
      //dark: '#002884',
      contrastText: '#fff',
    },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
  typography:{
    fontFamily:['Raleway']
  }
});


class App extends Component {
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default App;
