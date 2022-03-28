import { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { Spinner } from '../components/Spinner';
import profile from '../assets/profile.png'

export const WorkerTile = ({ worker }) => (
  <Link to={`/worker/${worker.aadhaar_no}`} key={worker.id} className="border-[1px] border-gray-400 rounded-xl flex items-center px-6 py-4 gap-4 min-w-[200px] shadow-lg hover:shadow-xl">
    <img src={profile} className="h-12 w-12 rounded-full" />
    <div className="flex flex-col justify-start items-start">
      <h1 className="text-xl font-bold">{worker.name}</h1>
      <h1 className="font-semibold text-cyan-600">{worker.department}</h1>
    </div>
  </Link>
)

export const WorkersMini = ({ id }) => {
  const { api, user } = useContext(GlobalContext)
  const [workers, setWorkers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log(id);
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: "Token " + user.token
      },
      redirect: 'follow'
    };
    fetch(`${api}worker/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        setWorkers(JSON.parse(result))
        setLoading(false)
        console.log(JSON.parse(result));
      })
      .catch(error => console.log('error', error));
  }, [api, user, id])
  if(loading) {
    return <Spinner />
  }
  return (
    <div className='overflow-hidden border-t-[1px] border-gray-400 pb-6 border-b-[1px] border-gray-600'>
      <div className='flex justify-between items-center my-4'>
        <h1 className='text-4xl font-semibold my-2'>Workers</h1>
        <div className='flex justify-center items-center gap-6'>
          <Link to={`/todays-attendance/${id}`} className='px-4 py-2 rounded-xl bg-cyan-600 shadow-lg'>Attendance</Link>
          <a href='https://teachablemachine.withgoogle.com/train/image' className='px-4 py-2 rounded-xl bg-cyan-600 shadow-lg'>Detect</a>
          <Link to={`/add-worker/${id}`} className='px-4 py-2 rounded-xl bg-cyan-600 shadow-lg'>Add Worker</Link>
        </div>
      </div>
      <div className='flex gap-6 overflow-auto scroll-smooth no-scrollbar'>
        {workers?.map(worker => <WorkerTile worker={worker}/>)}
      </div>
    </div>
  )
}