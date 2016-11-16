import React, { Component, PropTypes } from 'react';
import './styles/app.scss';

import Header from './header';
import { IntlProvider } from 'react-intl';

import { compose, withProps, withState } from 'recompose';

import Cookies from 'cookies-js';

import coursesDe from './courses.de';

const messages = {
  de: {
    'menu.home': 'Startseit',
    'menu.resume': 'Lebenslauf',
    'menu.courses': 'Klassen',
    'menu.projects': 'Projekten',
    'menu.contact': 'Kontakt',

    'resume.my-resume-is-available': 'Mein Lebenslauf ist an diesen Links:',
    'resume.my-resume.en': 'Mein Lebenslauf (Amerikan)',
    'resume.my-resume.de': 'Mein Lebenslauf (Deutsch)',

    'spring': 'Frühling',
    'fall': 'Herbst',
    'summer-2-and-fall': 'Sommer 2 und Herbst',
    'summer-1': 'Sommer 1',

    ...coursesDe,

    'projects.overview': 'Ich habe an mehreren persönliche Projekten gearbeitet.  Sie können einige auf meiner Seite von {githubLink} finden.  Einige meiner Favoriten sind hier:',
    'projects.mips-vim': 'MIPS Syntax-Hervoerhebung für Vim',
    'projects.personal-website': 'Persönliche Website'
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
          {React.cloneElement(this.props.children, { currentLanguage: this.props.currentLanguage })}
        </div>
      </div>
    </IntlProvider>
  );
}

export default compose(
  withState('currentLanguage', 'setCurrentLanguage', Cookies.get('currentLanguage') || 'en'),
  withProps(({ setCurrentLanguage }) => ({
    onLanguageChange: l => {
      Cookies.set('currentLanguage', l);
      setCurrentLanguage(l);
    }
  }))
)(App);
