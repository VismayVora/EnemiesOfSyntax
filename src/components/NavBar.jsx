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
    <div className='flex justify-between items-center h-16 gap-24 bg-gra
    y-400 px-32 bg-gray-300'>
      <Link to='/' className='text-2xl font-bold text-cyan-600' >WorkForce</Link>
      {login && (     
        <Link to='/' className='font-bold text-xl text-red-600' onClick={() => Logout()}>Logout</Link>
      )}
    </div>
  )
}