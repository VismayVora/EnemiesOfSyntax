import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { LoginO } from './pages/LoginOwner'
import { LoginC } from './pages/LoginContractor'
import { RegisterO } from './pages/RegisterOwner'
import { RegisterC } from './pages/RegisterContractor'

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login-owner' element={<LoginO />} />
          <Route path='/login-contractor' element={<LoginC />} />
          <Route path='/register-owner' element={<RegisterO />} />
          <Route path='/register-contractor' element={<RegisterC />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
