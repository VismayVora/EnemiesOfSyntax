import { useState } from 'react'

export const RegisterC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const onSubmit = e => {
    e.preventDefault()
    console.log('submitted');
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter Name...' />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email...' />
        <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='Enter Password...' />
        <button type="submit">Register</button>
      </form> 
    </>
  )
}
