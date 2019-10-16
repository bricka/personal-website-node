import * as React from 'react';

import { FormattedMessage } from 'react-intl';

import germanResumePath from './resume-de-en.pdf';
import americanResumePath from './resume.pdf';

const americanLink = (
  <p key="resume-us">
    <a href={americanResumePath}>
      <FormattedMessage
        id="resume.my-resume.en"
        defaultMessage="American-style, English"
      />
    </a>
  </p>
);

const germanEnLink = (
  <p key="resume-de">
    <a href={germanResumePath}>
      <FormattedMessage
        id="resume.my-resume.de-en"
        defaultMessage="German-style, English"
      />
    </a>
  </p>
);

interface Props {
  currentLanguage: string;
}

export default function Resume(props: Props) {
  function links() {
    switch(props.currentLanguage) {
      case 'de':
        return [ germanEnLink, americanLink ];
      default:
        return [ americanLink, germanEnLink ];
    }
  }

  return (
    <div>
      <p>
        <FormattedMessage
          id="resume.my-resume-is-available"
          defaultMessage="My resume is available through these links:"
        />
      </p>

      {links()}

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
