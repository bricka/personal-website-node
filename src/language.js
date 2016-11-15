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
          {this._languageOptions().map((l, i) => i !== 0 ? <span> / {l}</span> : l)}
        </span>
      </div>
    </IntlProvider>
  );

  _languageOptions = () => languages.map(l => {
    if (this.props.currentLanguage === l) {
      return (
        <span className="current-language">{l}</span>
      );
    } else {
      return (
        <a
          href="#" 
          onClick={this._getHandlerForLanguageClick(l)}
        >
          {l}
        </a>
      );
    }
  });

  _getHandlerForLanguageClick = language => e => {
    e && e.preventDefault();
    this.props.onLanguageChange(language);
  }
}
