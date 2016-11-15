import React, { Component, PropTypes } from 'react';

const languages = [ 'en', 'de' ];

export default class LanguageSelector extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
  };

  render = () => (
    <div className="language-selector">
      Language:&nbsp;
      <span className="language-options">
        {this._languageOptions().map((l, i) => i !== 0 ? <span> / {l}</span> : l)}
      </span>
    </div>
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
          onClick={() => this.props.onLanguageChange(l)}
        >
          {l}
        </a>
      );
    }
  });
}
