import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage"

export default function App() {
<Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
}   