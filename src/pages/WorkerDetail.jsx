import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { NavBar } from '../components/NavBar'
import { Spinner } from '../components/Spinner'
import profile from '../assets/profile.png'

export const WorkerDetail = () => {
  const { workerId } = useParams()
  const { api, user } = useContext(GlobalContext)
  const [detail, setDetail] = useState({})
  const [violations, setViolations] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: "Token " + user.token
      },
      redirect: 'follow'
    };
    fetch(api+'modify_worker/'+workerId+'/', requestOptions)
      .then(response => response.text())
      .then(result => {
        setDetail(JSON.parse(result))
        setLoading(false)
        console.log(JSON.parse(result))
      })
    fetch(api+'workerviolation/', requestOptions)
      .then(response => response.text())
      .then(result => {
        setViolations(JSON.parse(result))
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
      <div className='grid grid-cols-12 px-32 gap-8 mt-6'>
        <div className='col-span-4 flex flex-col gap-4'>
          <div className='px-8 py-6 flex flex-col justify-center items-center w-full border-[1px] border-gray-400 rounded-xl'>
            <img src={profile} className='h-32 w-32 rounded-full mb-4' />
            <h1 className='text-4xl font-bold'>{detail.name}</h1>
            <h1 className='text-xl font-semibold text-gray-400 mb-2'>{detail.department}</h1>
            <h1 className='text-lg'>Aadhaar number: {detail.aadhaar_no}</h1>
            <h1 className='text-lg'>Email: {detail.email}</h1>
            <h1 className='text-lg'>Mobile Number: {detail.phone_no}</h1>
          </div>
          <div className='px-8 py-6 flex flex-col justify-center items-start w-full border-[1px] border-gray-400 rounded-xl mb-6'>
            <h1 className='text-4xl font-bold'>Violations</h1>
            {violations?.map(violation => (
              <div key={violation.id} className='border-[1px] border-gray-400 rounded-xl px-4 py-2 mt-4 w-full flex flex-col'>
                <img className='w-full' src={violation.photo} alt='violation' />
                <div className='flex flex-col px-4'>
                  <h1>Violation1: {violation.mask}</h1>
                  <h1>Violation2: {violation.helmet}</h1>
                  <h1>Location: {violation.latitude + ', ' + violation.longitude}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-8 px-8 py-4 flex flex-col gap-4'>
          <h1 className='text-5xl font-semibold mb-6'>Past Attendance</h1>
          <div className='grid grid-cols-10 border-[1px] border-gray-400 rounded-xl px-4 py-3'>
            <div className='col-span-2 flex justify-center text-xl font-semibold'>Date</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Check-in</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Check-out</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Total time</div>
            <div className='col-span-2 flex justify-center text-xl font-semibold border-l-[1px] border-gray-300'>Status</div>
          </div>
          <div className='grid grid-cols-10 border-[1px] border-gray-400 rounded-xl px-4 py-2'>
            <div className='col-span-2 flex justify-center text-lg border-gray-300'>27-03-2022</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>07:15:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>08:34:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>1</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>Half Day</div>
          </div>
          <div className='grid grid-cols-10 border-[1px] border-gray-400 rounded-xl px-4 py-2'>
            <div className='col-span-2 flex justify-center text-lg border-gray-300'>26-03-2022</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>10:15:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>18:34:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>8</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>Full Day</div>
          </div>
          <div className='grid grid-cols-10 border-[1px] border-gray-400 rounded-xl px-4 py-2'>
            <div className='col-span-2 flex justify-center text-lg border-gray-300'>25-03-2022</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>-</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>-</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>0</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>Absent</div>
          </div>
          <div className='grid grid-cols-10 border-[1px] border-gray-400 rounded-xl px-4 py-2'>
            <div className='col-span-2 flex justify-center text-lg border-gray-300'>24-03-2022</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>07:15:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>18:34:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>11</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>Full Day</div>
          </div>
          <div className='grid grid-cols-10 border-[1px] border-gray-400 rounded-xl px-4 py-2'>
            <div className='col-span-2 flex justify-center text-lg border-gray-300'>23-03-2022</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>08:15:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>18:34:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>10</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>Full Day</div>
          </div>
          <div className='grid grid-cols-10 border-[1px] border-gray-400 rounded-xl px-4 py-2'>
            <div className='col-span-2 flex justify-center text-lg border-gray-300'>22-03-2022</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>-</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>-</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>0</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>Absent</div>
          </div>
          <div className='grid grid-cols-10 border-[1px] border-gray-400 rounded-xl px-4 py-2'>
            <div className='col-span-2 flex justify-center text-lg border-gray-300'>21-03-2022</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>09:15:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>12:34:35</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>3</div>
            <div className='col-span-2 flex justify-center text-lg border-l-[1px] border-gray-300'>Half Day</div>
          </div>
        </div>
      </div>
    </div>
  )
}