import * as React from 'react';

import { Link, RouteComponentProps } from '@reach/router';
import { FormattedMessage } from 'react-intl';

const Projects = (_props: RouteComponentProps) => (
  <div>
    <p>
      <FormattedMessage
        id="projects.overview"
        defaultMessage="I have worked on several personal projects over the years.  You can find some of them at {myGithubPage}.  Some of my favorites:"
        values={{
          myGithubPage: (
            <a href="https://github.com/bricka">
              <FormattedMessage
                id="projects.my-github-page"
                    defaultMessage="my GitHub page"
              />
            </a>
          ),
        }}
      />
    </p>

    <ul>
      <li>
        <Link to="mips-vim">
          <FormattedMessage
            id="projects.mips-vim"
            defaultMessage="MIPS Syntax Highlighting for Vim"
          />
        </Link>
      </li>
      <li>
        <Link to="giles">
          giles CD Ripper
        </Link>
      </li>
      <li>
        <Link to="personal-website">
          <FormattedMessage
            id="projects.personal-website"
            defaultMessage="Personal Website"
          />
        </Link>
      </li>
    </ul>
  </div>
);

export default Projects;
