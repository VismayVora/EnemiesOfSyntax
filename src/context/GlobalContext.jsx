import { useState, createContext } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
  const [login, setLogin] = useState(localStorage.getItem('user') ? true : false)
  const api = 'http://b3c7-2402-3a80-187a-e020-a03f-2679-7e55-4cf5.ngrok.io/'
  const values = {login, user, api, setUser, setLogin}
  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}