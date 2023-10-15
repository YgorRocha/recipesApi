import React from 'react'
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/Global';
import { Home } from './Pages/Home/Home.jsx';

import theme from './Styles/themes'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
