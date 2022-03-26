import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Landing } from './pages/Landing'
import { LoginO } from './pages/LoginOwner'
import { LoginC } from './pages/LoginContractor'
import { RegisterO } from './pages/RegisterOwner'
import { RegisterC } from './pages/RegisterContractor'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login-owner' element={<LoginO />} />
          <Route path='/login-contractor' element={<LoginC />} />
          <Route path='/register-owner' element={<RegisterO />} />
          <Route path='/register-contractor' element={<RegisterC />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
