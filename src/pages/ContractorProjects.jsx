import { useState, useEffect, useContext } from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs';
import { Link } from 'react-router-dom';
import { SimpleMap } from '../components/SimpleMap';
import { GlobalContext } from '../context/GlobalContext';
import { Spinner } from '../components/Spinner'

export const ProjectTile = ({ project }) => (
  <Link to={`/project/${project.id}`} key={project.id} className="border-[1px] border-gray-400 rounded-xl flex px-8 py-4 gap-4 min-w-[300px]">
    <div className="bg-red-400 h-16 w-16 rounded-full"></div>
    <div className="flex flex-col justify-start items-start">
      <h1 className="text-2xl font-bold">{project.name}</h1>
      <h1 className="text-lg font-semibold text-cyan-600">{project.location_name}</h1>
    </div>
  </Link>
)

export const TabSelector = ({
  isActive,
  children,
  onClick,
}) => (
  <button
    className={`mr-8 group inline-flex items-center px-2 py-4 border-b-2 font-medium text-xl leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? 'border-indigo-500 text-cyan-600 focus:outline-none focus:text-cyan-800 focus:border-cyan-700'
        : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export const ContractorProjects = () => {
  const { user, api } = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [selectedTab, setSelectedTab] = useTabs([
    'Ongoing',
    'Completed'
  ]);
  useEffect(() => {
    console.log(user.token);
    var requestOptions = {
      method: 'GET',
      headers: {
        Authorization: "Token " + user.token
      },
      redirect: 'follow'
    };
    fetch(api+"contractor_projects/", requestOptions)
      .then(response => response.text())
      .then(result => {
        setProjects(JSON.parse(result))
        setLoading(false)
        console.log(JSON.parse(result));
      })
      .catch(error => console.log('error', error));
  }, [user, api])
  if(loading) {
    return <Spinner />
  }
  return (
    <div className='px-64 min-h-screen'>
      <h1 className="text-5xl font-bold py-4">Projects</h1>
      <nav className="flex justify-between">
        <div className="">
          <TabSelector
            isActive={selectedTab === 'Ongoing'}
            onClick={() => setSelectedTab('Ongoing')}
          >
            Ongoing
          </TabSelector>
          <TabSelector
            isActive={selectedTab === 'Completed'}
            onClick={() => setSelectedTab('Completed')}
          >
            Completed
          </TabSelector>
        </div>
      </nav>
      <div className="p-4">
        <TabPanel hidden={selectedTab !== 'Ongoing'}>
          <div className="flex gap-6">
            {projects?.filter(project => !project.completed)?.map(project => <ProjectTile project={project}/>)}
          </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== 'Completed'}>
          <div className="flex gap-6">
            {projects?.filter(project => project.completed)?.map(project => <ProjectTile project={project}/>)}
          </div>
        </TabPanel>
      </div>
      <div className="w-full py-4 rounded">
        <SimpleMap h='450' projects={projects} />
      </div>
    </div>
  )
}
