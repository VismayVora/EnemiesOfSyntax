import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { Spinner } from '../components/Spinner'

export const LoginC = () => {
  const navigate = useNavigate()
  const { api, setUser, setLogin } = useContext(GlobalContext)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)
  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", pass);
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    fetch(api+"login/", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setUser(JSON.parse(result))
        setLogin(true)
        localStorage.setItem('user', result)
        setLoading(false)
        navigate('/projects')
      })
      .catch(error => {
        console.log(error);
        setLoading(false)
      });
  }
  if(loading) {
    return <Spinner />
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4 bg-gradient-to-r from-cyan-500'>
      <h1 className="text-4xl font-semibold">Login as Contractor</h1>
      <form className='flex flex-col justify-center items-center w-[50%] gap-6' onSubmit={onSubmit}>
        <input className='px-4 py-2 rounded-xl border-[2px] border-black w-[50%]' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email...' />
        <input className='px-4 py-2 rounded-xl border-[2px] border-black w-[50%]' type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='Enter Password...' />
        <button className='px-4 py-2 rounded-xl bg-cyan-600' type="submit">Login</button>
      </form>
      <Link to='/register-contractor' className="text-sm font-semibold text-cyan-600">Create new account</Link>
    </div>
  )
}
