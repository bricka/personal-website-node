import React from 'react';

import { FormattedMessage } from 'react-intl';

export default function Resume() {
  return (
    <div>
      <p>
        <FormattedMessage
          id="resume.my-resume-is-available"
          defaultMessage="My resume is available through this link:"
        />
      </p>

      <p>
        <a href="/resume.pdf">
          <FormattedMessage
            id="resume.my-resume.en"
            defaultMessage="My Resume"
          />
        </a>
      </p>

      <p>
        <a href="/resume-de-en.pdf">
          <FormattedMessage
            id="resume.my-resume.de-en"
            defaultMessage="My Resume (German-style, English)"
          />
        </a>
      </p>
    </div>
  );
}
