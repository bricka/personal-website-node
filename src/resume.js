import React from 'react';

import { FormattedMessage } from 'react-intl';

export default function Resume() {
  return (
    <div>
      <p>My resume is available through these links:</p>

      <p>
        <a href="/resume.pdf">
          <FormattedMessage
            id="resume.my-resume.en"
            defaultMessage="My Resume (American-style)"
          />
        </a>
      </p>
    </div>
  );
}
