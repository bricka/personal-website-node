import React from 'react';

import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

const ACTIVE_CLASS_NAME = 'selectedMenuItem';

export default function Menu() {
  return (
    <div className="menu">
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        exact
        to="/"
      >
        <FormattedMessage
          id="menu.home"
          defaultMessage="Home"
        />
      </NavLink>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/resume"
      >
        <FormattedMessage
          id="menu.resume"
          defaultMessage="Resume"
        />
      </NavLink>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/courses"
      >
        <FormattedMessage
          id="menu.courses"
          defaultMessage="Courses"
        />
      </NavLink>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/projects"
      >
        <FormattedMessage
          id="menu.projects"
          defaultMessage="Projects"
        />
      </NavLink>
      <NavLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/contact"
      >
        <FormattedMessage
          id="menu.contact"
          defaultMessage="Contact"
        />
      </NavLink>
    </div>
  );
}
