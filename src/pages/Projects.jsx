import React from 'react'
import { NavBar } from '../components/NavBar'
import { Spinner } from '../components/Spinner'
import { ContractorProjects } from './ContractorProjects'

export const Projects = () => {
  return (
    <div>
      <NavBar />
      <ContractorProjects />
    </div>
  )
}
