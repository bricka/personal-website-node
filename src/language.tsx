import * as React from 'react';

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

export default class LanguageSelector extends React.Component<Props> {
  public render = () => (
    <div className="language-selector">
      Language:&nbsp;
      <span className="language-options">
        {this.languageOption(languages[0])}&nbsp;/&nbsp;{this.languageOption(languages[1])}
      </span>
    </div>
  )

  private languageOption = ({ name, locale }: Language): React.JSX.Element => {
    if (this.props.currentLanguage === locale) {
      return (
        <span className="current-language" key={locale}>{name}</span>
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
