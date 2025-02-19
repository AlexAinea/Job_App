import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import JobListings from './components/JobListings'
import CurrentlyViewingJobsComps from './components/CurrentlyViewingJobsComps'
import { useState } from 'react'
import './styles/App.css'

const App = () => {
  let title = "Find Your Dream Job!"
  let subTitle = "Explore thousands of job opportunities that match your skills!"

  const [clicked,setClicked] = useState(false)

  return (
    <div>
      <Navbar />
      <HomePage titleProp = {title} subTitleProp = {subTitle} />
      <CurrentlyViewingJobsComps />
      {clicked ? <JobListings /> : null}
      <button className='cstmBut relative bottom-5 border-2 rounded-2xl mlhigh text-white bg-black border-black' onClick={(e) => (setClicked(!clicked))}>BROWSE ALL JOBS</button>
    </div>
  )
}

export default App