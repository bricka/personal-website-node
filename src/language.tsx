import * as React from 'react';

import styled from 'styled-components';

interface Language {
  locale: string;
  name: string;
}

const languages: Language[] = [
  {
    locale: 'en',
    name: 'English',
  },
  {
    locale: 'de',
    name: 'Deutsch',
  },
];

interface Props {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const LanguageSelectorWrapper = styled.div`
  padding: 5px;
  text-align: center;
`;

const CurrentLanguage = styled.span`
  font-weight: bold
`;

export default class LanguageSelector extends React.Component<Props> {
  public render = () => (
    <LanguageSelectorWrapper>
      Language:&nbsp;
      <span className="language-options">
        {this.languageOption(languages[0])}&nbsp;/&nbsp;{this.languageOption(languages[1])}
      </span>
    </LanguageSelectorWrapper>
  )

  private languageOption = ({ name, locale }: Language): JSX.Element => {
    if (this.props.currentLanguage === locale) {
      return (
        <CurrentLanguage>{name}</CurrentLanguage>
      );
    } else {
      return (
        <a
          href="#"
          key={locale}
          onClick={this.getHandlerForLanguageClick(locale)}
        >
          {name}
        </a>
      );
    }
  }

  private getHandlerForLanguageClick = (language: string) => (e: React.SyntheticEvent) => {
    e && e.preventDefault();
    this.props.onLanguageChange(language);
  }
}
