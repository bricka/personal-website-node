import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GilesProjectDeutsch from './giles_deutsch';
import GilesProjectEnglish from './giles_english';

export default class GilesProject extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired
  };

  render = () => this.props.currentLanguage === 'de' ? (
    <GilesProjectDeutsch/>
  ) : (
    <GilesProjectEnglish/>
  );
}
