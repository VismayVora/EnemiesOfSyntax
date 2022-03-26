import { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { GlobalContext } from '../context/GlobalContext'
import { data } from '../assets/data'
import { NavBar } from '../components/NavBar';
import { Spinner } from '../components/Spinner';
import { SimpleMap } from '../components/SimpleMap';

export const Project = () => {
  const { api, user } = useContext(GlobalContext)
  const { id } = useParams()
  const [project, setProject] = useState({})
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
    fetch(`${api}contractor_projects/${id}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        setProject(JSON.parse(result))
        setLoading(false)
        console.log(JSON.parse(result));
      })
      .catch(error => console.log('error', error));
  }, [api, user, id])
  if(loading) {
    return <Spinner />
  }
  return (
    <div className='h-screen'>
      <NavBar />
      <div className="px-32 grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <h1 className="text-4xl font-semibold">{project.name}</h1>
          <h1 className="text-2xl text-gray-400 mt-2">{project.description}</h1>
          <div className='w-full h-full col-span-7'>
            <div className='flex flex-col justify-center items-center py-6'>
              <h1 className='text-4xl mb-4'>Worker Table</h1>
              <BarChart
                width={600}
                height={500}
                data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar name="cholestrol" dataKey="pv" fill="#0891b2" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <SimpleMap h='400' projects={project} />
        </div>
      </div>
    </div>
  )
}