import React, { Component, PropTypes } from 'react';

import Language from './language';
import Menu from './menu';

export default class Header extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
  };

  render = () => (
    <div className="header">
      <div className="title">
        <h1>Alex Brick</h1>
      </div>

      <Menu/>

      <Language
        currentLanguage={this.props.currentLanguage}
        onLanguageChange={this.props.onLanguageChange}
      />
    </div>
  );
}
