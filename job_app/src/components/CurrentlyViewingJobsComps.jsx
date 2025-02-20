import React, { useState, useEffect } from "react";
import jobData from "../data/jobs.json";
import "../styles/SVJC.css";

const CurrentlyViewingJobsComps = () => {
  const [allJobs] = useState(jobData.jobs);
  const [startIndex, setStartIndex] = useState(0);
  const [swipe, setSwipe] = useState(false); // Controls animation trigger

  useEffect(() => {
    const interval = setInterval(() => {
      setSwipe(true); // Start animation
      setTimeout(() => {
        setStartIndex((prevIndex) => (prevIndex + 1) % allJobs.length);
        setSwipe(false); // Reset animation after the transition
      }, 300); // Matches animation duration
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [allJobs.length]);

  const viewingJobs = [
    startIndex,
    (startIndex + 1) % allJobs.length,
    (startIndex + 2) % allJobs.length,
  ];

  return (
    <div className="p-8">
      {/* Job Cards Container */}
      <div
        className={`flex flex-wrap justify-center gap-6 transition-transform duration-300 ${
          swipe ? "animate-swipeRight" : ""
        }`}
      >
        {allJobs
          .filter((_, index) => viewingJobs.includes(index))
          .map((job) => (
            <div
              key={job.id}
              className="bg-green-100 border-green-500 border-2 rounded-xl shadow-lg p-4 w-96 h-auto"
            >
              <h2 className="text-xl font-bold text-green-800">{job.title}</h2>
              <p className="text-green-700 font-medium">{job.type}</p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Description:</span> {job.description}
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CurrentlyViewingJobsComps;
