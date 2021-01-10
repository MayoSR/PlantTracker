import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App'
import reducer from './redux/reducer/index'

const store = createStore(
  reducer,
)

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a2cf6e',
      main: '#fff',
      dark: '#618833'
    },
    secondary: {
      main: '#357a38',
    },
  },
  typography: {
    fontFamily:`'Ubuntu', sans-serif`,
  }
});


ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)