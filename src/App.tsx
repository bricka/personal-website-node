import * as React from 'react';

import { IntlProvider } from 'react-intl';
import { Router, RouteComponentProps } from '@reach/router';

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

function SubRouter({ children }: React.PropsWithChildren<RouteComponentProps>) {
  return (
    <>
      {children}
    </>
  )
}

export const App: React.FunctionComponent = () => {
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
          <Router>
            <Home path="/" currentLanguage={currentLanguage}/>
            <Resume path="resume" currentLanguage={currentLanguage}/>
            <Courses path="courses" />
            <SubRouter path="projects">
              <Projects path="/" />
              <MipsVimHighlightingProject path="mips-vim" currentLanguage={currentLanguage}/>
              <GilesProject path="giles" currentLanguage={currentLanguage}/>
              <PersonalWebsiteProject path="personal-website" currentLanguage={currentLanguage}/>
            </SubRouter>
            <Contact path="contact" />
          </Router>
        </div>
      </div>
    </IntlProvider>
  );
}
