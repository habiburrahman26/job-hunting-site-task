import React from 'react';

const Header = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <p class="btn btn-ghost normal-case text-xl">Job-Hunting</p>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" alt="" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
