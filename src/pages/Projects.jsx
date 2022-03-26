import React from 'react'
import { NavBar } from '../components/NavBar'
import { Spinner } from '../components/Spinner'
import { ContractorProjects } from './ContractorProjects'
import { OwnerProjects } from './OwnerProjects'

export const Projects = () => {
  return (
    <div>
      <NavBar />
      {/* <OwnerProjects /> */}
      <ContractorProjects />
    </div>
  )
}
