import React from 'react';

import { FormattedMessage } from 'react-intl';
import { IndexLink, Link } from 'react-router';

const ACTIVE_CLASS_NAME = 'selectedMenuItem';

export default function Menu() {
  return (
    <div className="menu">
      <IndexLink
        activeClassName={ACTIVE_CLASS_NAME}
        to="/"
      >
        <FormattedMessage
          id="menu.home"
          defaultMessage="Home"
        />
      </IndexLink>
      <Link
        activeClassName={ACTIVE_CLASS_NAME}
        to="/resume"
      >
        <FormattedMessage
          id="menu.resume"
          defaultMessage="Resume"
        />
      </Link>
      <Link
        activeClassName={ACTIVE_CLASS_NAME}
        to="/courses"
      >
        <FormattedMessage
          id="menu.courses"
          defaultMessage="Courses"
        />
      </Link>
      <Link
        activeClassName={ACTIVE_CLASS_NAME}
        to="/projects"
      >
        <FormattedMessage
          id="menu.projects"
          defaultMessage="Projects"
        />
      </Link>
      <Link
        activeClassName={ACTIVE_CLASS_NAME}
        to="/contact"
      >
        <FormattedMessage
          id="menu.contact"
          defaultMessage="Contact"
        />
      </Link>
    </div>
  );
}
