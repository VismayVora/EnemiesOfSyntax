import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


export const NavBar = () => {
  const{ login, setUser, setLogin } = useContext(GlobalContext)
  const Logout = () => {
    localStorage.removeItem('user')
    setLogin(false)
    setUser(null)
  }
  return (
    <div className='flex justify-end items-center h-16 gap-24 bg-gra
    y-400 px-64'>
      {login && (
        <div className="flex items-center gap-16">
          <Link to='/todays-attendance' className='font-bold text-xl'>Attendance</Link>
          <Link to='/safety' className='font-bold text-xl'>Safety Check</Link>
          <Link to='/' className='font-bold text-xl text-red-600' onClick={() => Logout()}>Logout</Link>
        </div>
      )}
    </div>
  )
}