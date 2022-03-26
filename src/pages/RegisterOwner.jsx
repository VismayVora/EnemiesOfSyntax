import { useState } from 'react'
import { Link } from 'react-router-dom'

export const RegisterO = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const onSubmit = e => {
    e.preventDefault()
    console.log('submitted');
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <Link to='/' className="text-sm font-semibold text-cyan-600">Home</Link>
      <h1 className="text-4xl font-semibold">Register as Owner</h1>
      <form className='flex flex-col justify-center items-center w-[50%] gap-6' onSubmit={onSubmit}>  
        <input className='px-4 py-2 rounded-xl border-[2px] border-black' type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Name...' />
        <input className='px-4 py-2 rounded-xl border-[2px] border-black' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email...' />
        <input className='px-4 py-2 rounded-xl border-[2px] border-black' type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='Enter Password...' />
        <button className='px-4 py-2 rounded-xl bg-cyan-600' type="submit">Login</button>
      </form>
      <Link to='/login-owner' className="text-sm font-semibold text-cyan-600">Already have an account</Link>
    </div>
  )
}
