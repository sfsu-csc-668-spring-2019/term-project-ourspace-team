import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './config/store';
import './App.css';
import * as MapFunction from './components/Map_Components/functions/index'
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
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
