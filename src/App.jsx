import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@mui/material'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LoginPage/LoginPage'
import theme from './query/theme'
import BeveragePage from './pages/BeveragePage'
import AppContextProvider from './components/AppContext'


const queryClient = new QueryClient({
  defaultOptions: {
  },
})

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/beverages" element={<BeveragePage/>} />
          </Routes>
        </Router>
      </QueryClientProvider>
      </AppContextProvider>
    </ThemeProvider>
)
}  
