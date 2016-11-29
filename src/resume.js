import React, { Component, PropTypes } from 'react';

import { FormattedMessage } from 'react-intl';

const americanLink = (
  <p>
    <a href="/resume.pdf">
      <FormattedMessage
        id="resume.my-resume.en"
        defaultMessage="American-style, English"
      />
    </a>
  </p>
);

const germanEnLink = (
  <p>
    <a href="/resume-de-en.pdf">
      <FormattedMessage
        id="resume.my-resume.de-en"
        defaultMessage="German-style, English"
      />
    </a>
  </p>
);

export default class Resume extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired
  };

  render = () => (
    <div>
      <p>
        <FormattedMessage
          id="resume.my-resume-is-available"
          defaultMessage="My resume is available through these links:"
        />
      </p>

      {this._links()}

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

  _links = () => {
    switch(this.props.currentLanguage) {
      case 'de':
        return [ germanEnLink, americanLink ];
      default:
        return [ americanLink, germanEnLink ];
    }
  };
}
