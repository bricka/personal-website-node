import React, { Component } from 'react';
import PropTypes from 'prop-types';

const languages = [
  {
    locale: 'en',
    name: 'English'
  },
  {
    locale: 'de',
    name: 'Deutsch'
  }
];

export default class LanguageSelector extends Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
  };

  render = () => (
    <div className="language-selector">
      Language:&nbsp;
      <span className="language-options">
        {this._renderLanguageOptions()}
      </span>
    </div>
  );

  _renderLanguageOptions = () => languages.map((l, i) => {
    if (i === 0) {
      return this._languageOption(l, l.locale);
    }

    return <span key={l.locale}> / {this._languageOption(l)}</span>;
  });

  _languageOption = ({ name, locale }, key) => {
    if (this.props.currentLanguage === locale) {
      return (
        <span className="current-language" key={key}>{name}</span>
      );
    } else {
      return (
        <a
          href="#"
          key={key}
          onClick={this._getHandlerForLanguageClick(locale)}
        >
          {name}
        </a>
      );
    }
  };

  _getHandlerForLanguageClick = language => e => {
    e && e.preventDefault();
    this.props.onLanguageChange(language);
  }
}
