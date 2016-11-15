import React from 'react';

import { Link } from 'react-router';

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
