import { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { GlobalContext } from '../context/GlobalContext'
import { data } from '../assets/data'
import { NavBar } from '../components/NavBar';
import { Spinner } from '../components/Spinner';
import { SimpleMap } from '../components/SimpleMap';
import { WorkersMini } from '../components/WorkersMini'
import { Tasks } from '../components/Tasks'


export const Project = () => {
  const { api, user } = useContext(GlobalContext)
  const { projectId } = useParams()
  const [project, setProject] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    console.log(projectId);
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: "Token " + user.token
      },
      redirect: 'follow'
    };
    fetch(`${api}contractor_projects/${projectId}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        setProject(JSON.parse(result))
        setLoading(false)
        console.log(JSON.parse(result));
      })
      .catch(error => console.log('error', error));
  }, [api, user, projectId])
  if(loading) {
    return <Spinner />
  }
  return (
    <div className='h-screen'>
      <NavBar />
      <div className="px-32 grid grid-cols-12 gap-16 mt-6">
        <div className="col-span-7">
          <div className="flex flex-col justify-between mb-6">
            <h1 className="text-6xl font-bold">{project.name}</h1>
            <h1 className="text-2xl text-gray-400 my-2 mb-4">{project.description}</h1>
            <button to='/projects' className='px-6 py-2 text-xl rounded-xl bg-cyan-600 w-[60%] shadow-lg hover:shadow-xl'>Mark as Complete</button>
          </div>
          <WorkersMini id={projectId} />
          <div className=''>
            <div className='flex flex-col justify-center items-center py-6'>
              <h1 className='text-4xl mb-6 font-semibold'>Daily Work</h1>
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
                <Bar name="Average Working hours" dataKey="uv" fill="#0891b2" />
              </BarChart>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <Tasks />
          <h1 className='text-4xl mb-6 font-semibold'>Location</h1>
          <SimpleMap h='300' projects={project} />
        </div>
      </div>
    </div>
  )
}