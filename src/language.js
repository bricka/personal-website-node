import React, { Component, PropTypes } from 'react';

import { IntlProvider } from 'react-intl';

const languages = [ 'en', 'de' ];

export default class LanguageSelector extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
  };

  render = () => (
    <IntlProvider>
      <div className="language-selector">
        Language:&nbsp;
        <span className="language-options">
          {this._renderLanguageOptions()}
        </span>
      </div>
    </IntlProvider>
  );

  _renderLanguageOptions = () => languages.map((l, i) => {
    if (i === 0) {
      return this._languageOption(l, l);
    }

    return <span key={l}> / {this._languageOption(l)}</span>;
  });

  _languageOption = (language, key) => {
    if (this.props.currentLanguage === language) {
      return (
        <span className="current-language" key={key}>{language}</span>
      );
    } else {
      return (
        <a
          href="#"
          key={key}
          onClick={this._getHandlerForLanguageClick(language)}
        >
          {language}
        </a>
      );
    }
  };

  _getHandlerForLanguageClick = language => e => {
    e && e.preventDefault();
    this.props.onLanguageChange(language);
  }
}
