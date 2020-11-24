import * as React from 'react';

import { Link } from '@reach/router';
import { FormattedMessage } from 'react-intl';

export default function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <FormattedMessage
          id="menu.home"
          defaultMessage="Home"
        />
      </Link>
      <Link to="/resume">
        <FormattedMessage
          id="menu.resume"
          defaultMessage="Resume"
        />
      </Link>
      <Link to="/courses">
        <FormattedMessage
          id="menu.courses"
          defaultMessage="Courses"
        />
      </Link>
      <Link to="/projects">
        <FormattedMessage
          id="menu.projects"
          defaultMessage="Projects"
        />
      </Link>
      <Link to="/contact">
        <FormattedMessage
          id="menu.contact"
          defaultMessage="Contact"
        />
      </Link>
    </div>
  );
}
