import { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { GlobalContext } from '../context/GlobalContext'
import { Spinner } from '../components/Spinner';
import { NavBar } from '../components/NavBar';

export const Checkbox = ({ task }) => {
  const [checked, setChecked] = useState(false)
  return (
    <div key={task.id} className={`w-full rounded-xl border-[1px] ${checked && 'bg-gray-200'} border-gray-400 px-4 py-2 flex justify-start items-center shadow-lg gap-4`}>
      <div onClick={() => setChecked(prevState => !prevState)} className={`h-8 w-8 rounded-full border-[1px] border-gray-400 ${checked && 'bg-gray-400'}`}>
        {checked && <CheckCircleIcon sx={{ fontSize: 36, color:'#0891b2' }} />}
      </div>
      <div>
        <h1 className={`text-xl ${checked && 'line-through'}`}>{task.title}</h1>
      </div>
    </div>
  )
}

export const Tasks = () => {
  const { api, user } = useContext(GlobalContext)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: "Token " + user.token
      },
      redirect: 'follow'
    };
    fetch(api+'task/', requestOptions)
      .then(response => response.text())
      .then(result => {
        setTasks(JSON.parse(result))
        console.log(JSON.parse(result))
        setLoading(false)
      })
  }, [user, api])
  if(loading) {
    return <Spinner />
  }
  return(
    <div>
      <div className="px-8 py-6 border-gray-400 rounded-2xl border-[1px] mb-8">
        <h1 className="text-4xl font-bold mb-4">Tasks</h1>
        <div className='flex flex-col gap-4'>
          {tasks?.map(task => <Checkbox task={task} />)}
        </div>
      </div>
    </div>
  )
}