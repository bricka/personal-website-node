import * as React from 'react';

import { FormattedMessage } from 'react-intl';

import resumePath from './alex-figl-brick-resume.pdf';

export default function Resume() {
  return (
    <div>
      <p>
        <FormattedMessage
          id="resume.my-resume-is-available"
          defaultMessage="You can find my resume here:"
        />
      </p>

      <p key="resume">
        <a href={resumePath}>
          <FormattedMessage
            id="resume.my-resume"
            defaultMessage="My Resume"
          />
        </a>
      </p>

      <p>
        <FormattedMessage
          id="resume.linkedin"
          defaultMessage="You may also see my {profileLink}"
          values={{
            profileLink: (
              <a href="http://www.linkedin.com/in/alex-brick-45406a6">
                <FormattedMessage
                  id="resume.linkedin-profile"
                  defaultMessage="profile on LinkedIn"
                />
              </a>
            )
          }}
        />
      </p>

    </div>
  );

}
