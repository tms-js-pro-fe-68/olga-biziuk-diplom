import React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import './index.css'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
)
