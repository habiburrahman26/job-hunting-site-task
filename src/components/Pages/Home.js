import axios from 'axios';
import React, { useEffect, useState } from 'react';
import JobList from './JobList';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          'https://refertest.pythonanywhere.com/job/openings'
        );
        const jobsData = data?.data;
        setJobs(jobsData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center mt-20">
        <button className="btn loading">loading</button>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-2xl font-semibold mt-20">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center my-20 gap-6 px-3">
      {jobs.map((job) => (
        <JobList
          key={job.id}
          company={job.company}
          designation={job.designation}
          location={job.location}
          min_experience={job.min_experience}
          skills={job.skills}
        />
      ))}
    </div>
  );
};

export default Home;
