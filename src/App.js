import React, { Component, PropTypes } from 'react';
import './styles/app.scss';

import Header from './header';

import { compose, withState } from 'recompose';

class App extends Component {
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

export default compose(
  withState('currentLanguage', 'onLanguageChange', 'en')
)(App);
