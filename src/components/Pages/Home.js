import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Jobs from './Jobs.ja';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          ' http://refertest.pythonanywhere.com/job/openings'
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

  console.log(jobs);

  if (isLoading) {
    return (
      <div className="text-center mt-20">
        <button class="btn loading">loading</button>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-2xl font-semibold mt-20">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center my-20 gap-6">
      {jobs?.map((job) => (
        <div
          className="card lg:w-[600px] bg-base-100 shadow rounded-sm"
          key={job.id}
        >
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <Link to={`/jobDetails/${job.id}`} className="text-success">
                View Details &#62;
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
