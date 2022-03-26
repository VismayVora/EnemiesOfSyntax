import { useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

export const Landing = () => {
  const navigate = useNavigate()
  const { login } = useContext(GlobalContext)
  useEffect(() => {
    if(login) {
      navigate('/projects')
    }
  }, [login, navigate])
  
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className='text-5xl font-semibold'>Manage your projects</h1>
      <h1 className='text-xl font-semibold text-gray-500'>Choose your role</h1>
      <div className="flex justify-center items-center w-full gap-12">
        <Link to='/login-owner' className="px-4 py-2 font-semibold text-xl rounded-xl bg-cyan-600">Owner</Link>
        <Link to='/login-contractor' className="px-4 py-2 font-semibold text-xl rounded-xl bg-cyan-600">Contractor</Link>
      </div>
    </div>
  )
}
