import React from 'react'
import jobData from '../data/jobs.json'
import { useState } from 'react'

const CurrentlyViewingJobsComps = () => {
    const [allJobs,setAllJobs] = useState(jobData.jobs)
    const [viewingJobs,setViewingJobs] = useState([0,1,2])
  return (
    <div>
        
    </div>
  )
}

export default CurrentlyViewingJobsComps