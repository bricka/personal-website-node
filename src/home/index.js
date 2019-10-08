import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HomeDeutsch from './deutsch';
import HomeEnglish from './english';

export default class Home extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired
  };

  render = () => this.props.currentLanguage === 'de' ? (
    <HomeDeutsch/>
  ) : (
    <HomeEnglish/>
  );
}
