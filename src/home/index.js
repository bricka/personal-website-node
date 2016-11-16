import React, { Component, PropTypes } from 'react';

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
