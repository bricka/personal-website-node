import * as React from 'react';
import './styles/app.scss';

import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as cookies from 'js-cookie';

import coursesDe from './courses.de';

import Contact from './contact';
import Courses from './courses';
import Header from './header';
import Home from './home';
import Projects from './projects';
import GilesProject from './projects/giles';
import MipsVimHighlightingProject from './projects/mips_vim';
import PersonalWebsiteProject from './projects/personal_website';
import Resume from './resume';

const messages: {[language: string]: any} = {
  de: {
    'menu.contact': 'Kontakt',
    'menu.courses': 'Klassen',
    'menu.home': 'Startseite',
    'menu.projects': 'Projekte',
    'menu.resume': 'Lebenslauf',

    'resume.linkedin': 'Sie können mich auch {profileLink} finden',
    'resume.linkedin-profile': 'auf LinkedIn',
    'resume.my-resume-is-available': 'Mein Lebenslauf ist an diesen Links verfügbar:',
    'resume.my-resume.de-en': 'Im deutschen Stil, auf Englisch',
    'resume.my-resume.en': 'Im amerikanischen Stil, auf Englisch',

    'fall': 'Herbst',
    'spring': 'Frühling',
    'summer-1': 'Sommer 1',
    'summer-2-and-fall': 'Sommer 2 und Herbst',

    ...coursesDe,

    'projects.mips-vim': 'MIPS Syntax-Highlighting für Vim',
    'projects.my-github-page': 'meiner Seite von GitHub',
    'projects.overview': 'Ich habe an mehreren persönlichen Projekten gearbeitet.  Sie können einige auf {myGithubPage} finden.  Einige meiner Favoriten sind hier:',
    'projects.personal-website': 'Persönliche Website',

    'contact.how-to-reach': 'Sie können mir unter {email} schreiben',
  },
};

export default function App() {
  const [currentLanguage, setCurrentLanguage] = React.useState(cookies.get('currentLanguage') || 'en');

  const onLanguageChange = (language: string) => {
      cookies.set('currentLanguage', language);
      setCurrentLanguage(language);
  };

  return (
    <BrowserRouter>
      <IntlProvider
        locale={currentLanguage}
        messages={messages[currentLanguage]}
      >
        <div className="app">
          <Header
            currentLanguage={currentLanguage}
            onLanguageChange={onLanguageChange}
          />

          <div className="body">
            <Switch>
              <Route path="/resume">
                <Resume currentLanguage={currentLanguage}/>
              </Route>
              <Route path="/courses">
                <Courses/>
              </Route>
              <Route path="/projects/mips-vim">
                <MipsVimHighlightingProject currentLanguage={currentLanguage}/>
              </Route>
              <Route path="/projects/giles">
                <GilesProject currentLanguage={currentLanguage}/>
              </Route>
              <Route path="/projects/personal-website">
                <PersonalWebsiteProject currentLanguage={currentLanguage}/>
              </Route>
              <Route path="/projects">
                <Projects currentLanguage={currentLanguage}/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route path="/">
                <Home currentLanguage={currentLanguage}/>
              </Route>
            </Switch>
          </div>
        </div>
      </IntlProvider>
    </BrowserRouter>
  );
}
