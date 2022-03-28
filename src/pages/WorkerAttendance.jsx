import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { NavBar } from '../components/NavBar'
import { Spinner } from '../components/Spinner'

export const Row = ({ worker }) => {
  const { api, user } = useContext(GlobalContext)
  const [work, setWork] = useState(worker)
  const { checkIn, setCheckIn } = useState(null)
  const { checkOut, setCheckOut } = useState(null)
  const enter = () => {
    let date = new Date()
    let time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0')
    console.log(time)
    setWork({ ...work, enter_time: time})
    fetch(api+'worker_attendance_detail/'+worker.id+'/', {
      method: 'PATCH',
      body: JSON.stringify({
        enter_time: time,
      }),
      headers: {
        'Authorization': 'Token ' + user.token
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  const exit = () => {
    let date = new Date()
    let time = date.getHours().toString().padStart(2, '0') + ':' + date.getMinutes().toString().padStart(2, '0') + ':' + date.getSeconds().toString().padStart(2, '0')
    console.log(time)
    setWork({ ...work, exit_time: time, total_time: time.split(':')[0] - work.enter_time.split(':')[0]})
    fetch(api+'worker_attendance_detail/'+worker.id+'/', {
      method: 'PATCH',
      body: JSON.stringify({
        exit_time: time,
      }),
      headers: {
        'Authorization': 'Token ' + user.token
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  return(
    <div key={work.id} className='grid grid-cols-12 border-[1px] border-gray-400 rounded-xl px-4 py-2'>
      <div className='col-span-2 flex justify-center text-lg'>{work.name}</div>
      <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>{work.department}</div>
      <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>{work.enter_time ? work.enter_time : <h1 className='cursor-pointer text-cyan-600' onClick={() => enter()}>Check In</h1>}</div>
      <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>{work.exit_time ? work.exit_time : <h1 className='cursor-pointer text-cyan-600' onClick={() => exit()}>Check Out</h1>}</div>
      <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>{work.total_time ? work.total_time : <h1>-</h1>}</div>
      <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300 text-cyan-600'>Change Status</div>
    </div>
  )
}

export const WorkerAttendance = () => {
  const { attendanceId } = useParams()
  const { api, user } = useContext(GlobalContext)
  const [attendance, setAttendance] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: "Token " + user.token
      },
      redirect: 'follow'
    };
    fetch(api+'worker_attendance/'+attendanceId, requestOptions)
      .then(response => response.text())
      .then(result => {
        setAttendance(JSON.parse(result))
        setLoading(false)
        console.log(JSON.parse(result))
      })
  }, [api, user])
  if(loading) {
    return <Spinner />
  }
  return(
    <div>
      <NavBar />
      <div className='flex flex-col px-32 justify-center items-center'>
        <h1 className='text-3xl font-bold my-6'>Attendance Page</h1>
        <div className='flex flex-col gap-4 w-full'>
          <div className='grid grid-cols-12 border-[1px] border-gray-400 rounded-xl px-4 py-3'>
            <div className='col-span-2 flex justify-center text-xl font-semibold'>Name</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Department</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Check-in</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Check-out</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Total time</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Status</div>
          </div>
          {attendance?.map(worker => <Row worker={worker} />)}
        </div>
      </div>
    </div>
  )
}