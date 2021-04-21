import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import routes from './routes'

function props(){
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/profile">
        Profile
      </a>
      <a className="menu-item" href="/courses">
        Courses
      </a>
      <a className="menu-item" href="/mentor">
        Mentor
      </a>
    </Menu>
  );
};

export default props