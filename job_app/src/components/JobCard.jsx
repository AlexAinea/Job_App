import React, { useState } from "react";
import jobData from "../data/jobs.json";

const JobCard = () => {
  const [allJobs] = useState(jobData.jobs);
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="text-center font-extrabold text-3xl mb-6">
        <h1 className="text-green-700">ALL JOBS</h1>
      </div>

      {/* Job Cards Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {allJobs.map((job) => {
          const fullDescription = job.description;
          const shortDescription = fullDescription.slice(0, 10) + "..."; // ✅ Corrected

          return (
            <div
              key={job.id}
              className="bg-green-100 border-green-500 border-2 rounded-xl shadow-lg p-4 w-96 h-auto"
            >
              <h2 className="text-xl font-bold text-green-800">{job.title}</h2>
              <p className="text-green-700 font-medium">{job.type}</p>

              {/* ✅ Fixed Description Rendering */}
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Description:</span> {showFull ? fullDescription : shortDescription}
                <button 
                  onClick={toggleShowFull} 
                  className="hover cursor-pointer ml-2 text-green-700 font-medium rounded px-2 py-1 bg-gray-300"
                >
                  {showFull ? "Show Less" : "Show More"}
                </button>
              </p>

              <p className="text-sm text-gray-700">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Salary:</span> {job.salary}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Company:</span> {job.company}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Experience:</span> {job.experience}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Posted:</span> {job.posted_date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobCard;
