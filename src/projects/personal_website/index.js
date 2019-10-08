import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PersonalWebsiteProjectDeutsch from './personal_website_deutsch';
import PersonalWebsiteProjectEnglish from './personal_website_english';

export default class PersonalWebsiteProject extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired
  };

  render = () => this.props.currentLanguage === 'de' ? (
    <PersonalWebsiteProjectDeutsch/>
  ) : (
    <PersonalWebsiteProjectEnglish/>
  );
}
