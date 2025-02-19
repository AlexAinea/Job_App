import React from 'react'
import jobData from '../data/jobs.json'
import { useState } from 'react'
import JobCard from './JobCard'

const CurrentlyViewingJobsComps = () => {
    const [allJobs,setAllJobs] = useState(jobData.jobs)
    const [viewingJobs,setViewingJobs] = useState([0,1,2])
    const [jobIndex,setJobIndex] = useState([allJobs[1].id])
  return (
    <div>
        {console.log(jobIndex)}
    </div>
  )
}

export default CurrentlyViewingJobsComps