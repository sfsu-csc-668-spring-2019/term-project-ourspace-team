import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './routes';
import { store, persistor } from './config/store';
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
    fontFamily:['Raleway'],
    title:{
      fontSize: '2.75rem',
      paddingLeft: '1rem',
      paddingBottom: '2rem',
    },
    display1:{
      fontSize: '1.25rem',
      paddingLeft: '1rem',
      paddingBottom: '.5rem',
    }

  }
});

class App extends Component {

  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MuiThemeProvider theme={theme}>
            <Routes />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
