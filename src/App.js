import React, { Component, PropTypes } from 'react';
import './styles/app.scss';

import Header from './header';
import { IntlProvider } from 'react-intl';

import { compose, withState } from 'recompose';

const messages = {
  de: {
    'menu.home': 'Startseit',
    'menu.resume': 'Lebenslauf',
    'menu.courses': 'Klassen',
    'menu.projects': 'Projekten',
    'menu.contact': 'Kontakt'
  }
};

class App extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
  };

  render = () => (
    <IntlProvider
      locale={this.props.currentLanguage}
      messages={messages[this.props.currentLanguage]}
    >
      <div className="app">
        <Header
          currentLanguage={this.props.currentLanguage}
          onLanguageChange={this.props.onLanguageChange}
        />

        <div className="body">
          {this.props.children}
        </div>
      </div>
    </IntlProvider>
  );
}

export default compose(
  withState('currentLanguage', 'onLanguageChange', 'en')
)(App);
