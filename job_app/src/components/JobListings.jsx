import React from 'react'
import jobData from '../data/jobs.json'

const JobListings = () => {
  const recentJobs = j
  return (
    <div>
        <div className=' grid place-content-center font-extrabold'>
            <h1/>BROWSE JOBS
        </div>
        <div className='flex flex-row justify-evenly flex-wrap'>
            {jobData.jobs.map((job) => (<div key={job.id} className='rounded-xl border-2 h-56 w-96 my-2.5'>
                <h2>{job.title}</h2>
                <p>{job.type}</p>
                <p>Description: {job.description}</p>
                <p>Location: {job.location}</p>
                <p>salary: {job.salary}</p>
                <p>company: {job.company}</p>
                <p>experience: {job.experience}</p>
                <p>posted_date: {job.posted_date}</p>
            </div>))}
        </div>
    </div>
  )
}

export default JobListings