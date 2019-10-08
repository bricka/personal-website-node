import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/app.scss';

import Header from './header';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { compose, withProps, withState } from 'recompose';

import Cookies from 'cookies-js';

import coursesDe from './courses.de';

import Contact from './contact';
import Courses from './courses';
import GilesProject from './projects/giles';
import Home from './home';
import MipsVimHighlightingProject from './projects/mips_vim';
import PersonalWebsiteProject from './projects/personal_website';
import Projects from './projects';
import Resume from './resume';

const messages = {
  de: {
    'menu.home': 'Startseite',
    'menu.resume': 'Lebenslauf',
    'menu.courses': 'Klassen',
    'menu.projects': 'Projekte',
    'menu.contact': 'Kontakt',

    'resume.my-resume-is-available': 'Mein Lebenslauf ist an diesen Links verfügbar:',
    'resume.my-resume.en': 'Im amerikanischen Stil, auf Englisch',
    'resume.my-resume.de-en': 'Im deutschen Stil, auf Englisch',
    'resume.linkedin': 'Sie können mich auch {profileLink} finden',
    'resume.linkedin-profile': 'auf LinkedIn',

    'spring': 'Frühling',
    'fall': 'Herbst',
    'summer-2-and-fall': 'Sommer 2 und Herbst',
    'summer-1': 'Sommer 1',

    ...coursesDe,

    'projects.overview': 'Ich habe an mehreren persönlichen Projekten gearbeitet.  Sie können einige auf {myGithubPage} finden.  Einige meiner Favoriten sind hier:',
    'projects.my-github-page': 'meiner Seite von GitHub',
    'projects.mips-vim': 'MIPS Syntax-Highlighting für Vim',
    'projects.personal-website': 'Persönliche Website',

    'contact.how-to-reach': 'Sie können mir unter {email} schreiben'
  }
};

class App extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
  };

  render = () => (
    <BrowserRouter>
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
            <Switch>
              <Route path="/resume">
                <Resume currentLanguage={this.props.currentLanguage}/>
              </Route>
              <Route path="/courses">
                <Courses currentLanguage={this.props.currentLanguage}/>
              </Route>
              <Route path="/projects">
                <Projects currentLanguage={this.props.currentLanguage}/>
              </Route>
              <Route path="/projects/mips-vim">
                <MipsVimHighlightingProject currentLanguage={this.props.currentLanguage}/>
              </Route>
              <Route path="/projects/giles">
                <GilesProject currentLanguage={this.props.currentLanguage}/>
              </Route>
              <Route path="/projects/personal-website">
                <PersonalWebsiteProject currentLanguage={this.props.currentLanguage}/>
              </Route>
              <Route path="/contact">
                <Contact currentLanguage={this.props.currentLanguage}/>
              </Route>
              <Route path="/">
                <Home currentLanguage={this.props.currentLanguage}/>
              </Route>
            </Switch>
          </div>
        </div>
      </IntlProvider>
    </BrowserRouter>
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
