import React, { Component, PropTypes } from 'react';
import './styles/app.scss';

import Header from './header';

import { withState } from 'recompose';

export default class App extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
  };

  render = () => (
    <div className="app">
      <Header
        currentLanguage={this.props.currentLanguage}
        onLanguageChange={this.props.onLanguageChange}
      />

      <div className="body">
        {this.props.children}
      </div>
    </div>
  );
}
