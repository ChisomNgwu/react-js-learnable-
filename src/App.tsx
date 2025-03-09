import React, { useState } from "react";
import "./App.css";
import jobData from "./jobData.json"

// Job type definition
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  available: boolean;
}

// imported jobData from json file
const jobs: Job[] = jobData;

// JobCard Component
const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`job-card ${job.available ? "" : "unavailable"}`}>
      <h2>{job.title}</h2>
      <p>{job.company} - {job.location}</p>
      {!job.available && <p className="unavailable-text">This job is no longer available</p>}
      {job.available && (
        <div>
      <button className= "job-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p className= "salary-text">Salary: {job.salary}</p>}
      </div>
      )}
    </div>
  );
};

// JobList Component
const JobList: React.FC = () => {
  return (
    <div className= "job-list">
      <h1>JOBS LISTINGS</h1>
      {jobs.length > 0 ? (
        <div className= "job-grid">
          {jobs.map((job: Job) => <JobCard key={job.id} job={job} />)}
        </div>
      ) : (
        <p className= "no-jobs">No jobs available at the moment.</p>
      )}
    </div>
  );
};

export default JobList;
