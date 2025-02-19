import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import JobListings from './components/JobListings'
import { useState } from 'react'

const App = () => {
  let title = "Find Your Dream Job!"
  let subTitle = "Explore thousands of job opportunities that match your skills!"

  const [clicked,setClicked] = useState(false)

  return (
    <div>
      <Navbar />
      <HomePage titleProp = {title} subTitleProp = {subTitle} />
      <button onClick={(e) => (setClicked(!clicked))}>BROWSE ALL JOBS</button>
      {clicked ? <JobListings /> : null}
    </div>
  )
}

export default App