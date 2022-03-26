import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


export const NavBar = () => {
  const{ setToken, setUsername, token } = useContext(GlobalContext)
  const Logout = () => {
    setToken('')
    setUsername('')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
  }
  return (
    <div className='flex justify-end items-center h-16 gap-24 bg-gra
    y-400 px-32'>
      {token ? (
        <div className="flex items-center gap-16">
          <Link to='/' className='font-bold text-xl text-red-600' onClick={() => Logout()}>Logout</Link>
        </div>
      ) : (
        <div className="flex items-center gap-16">
          <Link to='/login' className='font-bold text-xl'>Login</Link>
          <Link to='/register' className='font-bold text-xl'>Register</Link>
        </div>
      )}
    </div>
  )
}