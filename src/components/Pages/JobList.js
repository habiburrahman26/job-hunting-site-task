import React from 'react';

const JobList = ({
  designation,
  company,
  location,
  min_experience,
  skills,
}) => {
  return (
    <div className="card w-[320px] md:w-[500px] lg:w-[600px] bg-base-100 shadow rounded-sm">
      <div className="card-body">
        <h2 className="card-title">{designation}</h2>
        <p className="text-gray-400 text-base font-semibold">{company}</p>
        <div className="flex items-center gap-1 mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{location}</span>
        </div>
        <p>
          <span className="font-semibold">Expricence:</span>
          {min_experience > 0 ? ` ${min_experience} Year` : ' fresher opening'}
        </p>
        <div>
          <p>
            <span className="font-semibold">Skills:</span> {skills.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobList;
