import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Landing } from './pages/Landing'
import { LoginO } from './pages/LoginOwner'
import { LoginC } from './pages/LoginContractor'
import { RegisterO } from './pages/RegisterOwner'
import { RegisterC } from './pages/RegisterContractor'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'
import { WorkerAttendance } from './pages/WorkerAttendance'
import { WorkerDetail } from './pages/WorkerDetail'

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
          <Route path='/todays-attendance/:attendanceId' element={<WorkerAttendance />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:projectId' element={<Project />} />
          <Route path='/worker/:workerId' element={<WorkerDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
