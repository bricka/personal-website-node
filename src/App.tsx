import * as React from 'react';
import './styles/app.scss';

import { IntlProvider } from 'react-intl';
import { Route, Switch } from 'react-router-dom';

import * as cookies from 'js-cookie';

import messages from './intl';

import Contact from './contact';
import Courses from './courses';
import Header from './header';
import Home from './home';
import Projects from './projects';
import GilesProject from './projects/giles';
import MipsVimHighlightingProject from './projects/mips_vim';
import PersonalWebsiteProject from './projects/personal_website';
import Resume from './resume';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = React.useState(cookies.get('currentLanguage') || 'en');

  const onLanguageChange = (language: string) => {
    cookies.set('currentLanguage', language);
    setCurrentLanguage(language);
  };

  return (
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
              <Projects/>
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
  );
}
