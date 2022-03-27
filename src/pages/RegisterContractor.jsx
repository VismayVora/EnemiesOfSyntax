import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { Spinner } from '../components/Spinner'

export const RegisterC = () => {
  const navigate = useNavigate()
  const { api, setUser, setLogin } = useContext(GlobalContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [pass, setPass] = useState('')
  const [category, setCategory] = useState('civil')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const onSubmit = e => {
    e.preventDefault()
    setLoading(true)
    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("phone_no", '+91'+phone);
    formdata.append("password", pass);
    formdata.append("department", category);
    formdata.append("name", name);
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    fetch(api+"contractor_register/", requestOptions)
      .then(response => response.text())
      .then(result => {
        setUser(result)
        setLogin(true)
        localStorage.setItem('user', result)
        setLoading(false)
        navigate('/projects')
        console.log(result);
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      });
  }
  if(loading) {
    return <Spinner />
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <h1 className="text-4xl font-semibold">Register as Contractor</h1>
      <form className='flex flex-col justify-center items-center w-[50%] gap-6' onSubmit={onSubmit}>  
        <input className='px-4 py-2 rounded-xl border-[2px] border-black w-[50%]' type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Name...' />
        <input className='px-4 py-2 rounded-xl border-[2px] border-black w-[50%]' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email...' />
        <input className='px-4 py-2 rounded-xl border-[2px] border-black w-[50%]' type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder='Enter Phone Number...' />
        <input className='px-4 py-2 rounded-xl border-[2px] border-black w-[50%]' type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='Enter Password...' />
        <select className='px-4 py-2 rounded-xl border-[2px] border-black w-[50%]' value={category} onChange={e => setCategory(e.target.value)}>
          <option value="civil">Civil</option>
          <option value="electric">Electric</option>
          <option value="plumbing">Plumbing</option>
        </select>
        {error ? <h1>{error}</h1> : ' '}
        <button className='px-4 py-2 rounded-xl bg-cyan-600' type="submit">Register</button>
      </form>
      <Link to='/login-contractor' className="text-sm font-semibold text-cyan-600">Already have an account</Link>
    </div>
  )
}
