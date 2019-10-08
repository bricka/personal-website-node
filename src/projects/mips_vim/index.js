import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MipsSyntaxHighlightingProjectDeutsch from './mips_vim_deutsch';
import MipsSyntaxHighlightingProjectEnglish from './mips_vim_english';

export default class MipsSyntaxHighlightingProject extends Component {
    static propTypes = {
        currentLanguage: PropTypes.string.isRequired
    };

    render = () => this.props.currentLanguage === 'de' ? (
        <MipsSyntaxHighlightingProjectDeutsch/>
    ) : (
        <MipsSyntaxHighlightingProjectEnglish/>
    );
}
