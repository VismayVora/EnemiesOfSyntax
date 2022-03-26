import { useState } from 'react'

export const LoginO = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const onSubmit = e => {
    e.preventDefault()
    console.log('submitted');
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email...' />
        <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='Enter Password...' />
        <button type="submit">Login</button>
      </form> 
    </>
  )
}
