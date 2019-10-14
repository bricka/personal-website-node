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
        {this.renderLanguageOptions()}
      </span>
    </div>
  )

  private renderLanguageOptions = () => languages.map(l => this.languageOption(l)).join(' / ');

  private languageOption = ({ name, locale }: Language) => {
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
