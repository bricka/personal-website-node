import React from 'react';

import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

export default function Projects() {
  return (
    <div>
      <p>
        <FormattedMessage
          id="projects.overview"
          defaultMessage="I have worked on several personal projects over the years.  You can find some of them at my {githubLink} page.  Some of my favorites:"
          values={{
            githubLink: <a href="https://github.com/bricka">GitHub</a>
          }}
        />
      </p>

      <ul>
        <li>
          <Link to="/projects/mips-vim">
            <FormattedMessage
              id="projects.mips-vim"
              defaultMessage="MIPS Syntax Highlighting for Vim"
            />
          </Link>
        </li>
        <li>
          <Link to="/projects/giles">
            giles CD Ripper
          </Link>
        </li>
        <li>
          <Link to="/projects/personal-website">
            <FormattedMessage
              id="projects.personal-website"
              defaultMessage="Personal Website"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
