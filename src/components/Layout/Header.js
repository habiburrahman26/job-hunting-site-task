import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get('http://refertest.pythonanywhere.com/user/data')
      .then(({ data }) => {
        const user = data?.data;
        setUserData(user);
      });
  }, []);

  return (
    <div className="navbar bg-base-100 shadow lg:px-32">
      <div className="flex-1">
        <p className="btn btn-ghost normal-case text-xl">Job-Hunting</p>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={userData.pictureUrl} alt="" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p className='font-semibold'>{userData.name}</p>
            </li>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
