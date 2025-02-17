import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import JobListings from './components/JobListings'

const App = () => {
  let title = "Find Your Dream Job!"
  let subTitle = "Explore thousands of job opportunities that match your skills!"
  return (
    <div>
      <Navbar />
      <HomePage titleProp = {title} subTitleProp = {subTitle} />
      <JobListings />
    </div>
  )
}

export default App